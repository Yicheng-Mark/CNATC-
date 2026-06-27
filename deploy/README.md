# CNATC 运动防护网 — 华为云 ECS 部署指南

本项目是 **React 19 + Vite 纯静态 SPA**(无后端)。打包后得到 `app/dist/`,用 Nginx 托管即可。

部署分两部分:**① 服务器一次性环境准备** + **② 每次发版跑部署脚本**。

---

## 目录说明

| 文件 | 作用 |
|------|------|
| `deploy/nginx.conf` | Nginx 站点配置(处理 SPA 路由、缓存、gzip) |
| `deploy/deploy.sh` | 一键部署脚本:打包 → 上传 → 替换 → 重载 |
| `deploy/README.md` | 本文档 |

---

## ① 服务器一次性准备(只需做一次)

> 以下命令在**服务器(ECS)上**执行。用 SSH 登录后操作。

### 1. 安装 Nginx

```bash
# CentOS / HuaweiOS / openEuler(华为云公共镜像多为这类)
yum install -y nginx
# Ubuntu / Debian
# apt update && apt install -y nginx
```

### 2. 放置 Nginx 配置

把本目录的 `nginx.conf` 内容放到服务器 `/etc/nginx/conf.d/cnatc.conf`(覆盖/新建)。

可以在服务器上直接执行:

```bash
mkdir -p /var/www/cnatc
# 然后把 deploy/nginx.conf 的内容写入 /etc/nginx/conf.d/cnatc.conf
```

> 提示:如果你用密钥登录,我可以远程帮你完成这一步(见下文「交给 Claude 自动部署」)。

### 3. 检查配置 & 启动

```bash
nginx -t                       # 测试配置是否正确
systemctl enable --now nginx   # 设置开机自启 + 立即启动
```

### 4. 开放安全组端口(华为云控制台)

进入 **ECS 控制台 → 安全组 → 配置规则 → 入方向规则**,放行:

| 协议 | 端口 | 说明 |
|------|------|------|
| TCP | **80** | HTTP 访问(必须) |
| TCP | **443** | HTTPS 访问(以后配域名+证书时需要) |
| TCP | 22 | SSH(默认已开,登录用) |

不放行 80 端口的话,外网访问会超时打不开。

---

## ② 每次发版:运行部署脚本(在本机)

### 1. 在本机放好私钥

把华为云 ECS 的 **SSH 私钥文件**保存到本机,例如:

```
~/.ssh/huawei_ecs.pem
```

> ⚠️ **不要把私钥内容粘贴到任何聊天框**。只告诉我**私钥在本机的路径**即可,我会直接用 SSH 操作,私钥不会进入对话记录。

**Windows 权限修复**(如果 SSH 报 `UNPROTECTED PRIVATE KEY FILE`):

在 PowerShell 里对私钥文件执行:
```powershell
icacls $env:USERPROFILE\.ssh\huawei_ecs.pem /inheritance:r
icacls $env:USERPROFILE\.ssh\huawei_ecs.pem /grant:r "$($env:USERNAME):(R)"
```

### 2. 编辑部署脚本配置

打开 `deploy/deploy.sh`,改顶部配置区:

```bash
SERVER_IP="121.37.x.x"               # 你的 ECS 公网 IP
SSH_USER="root"                      # 登录用户
SSH_KEY="$HOME/.ssh/huawei_ecs.pem"  # 私钥路径
REMOTE_DIR="/var/www/cnatc"          # 和 nginx.conf 的 root 保持一致
```

### 3. 确保本地有最新打包(项目已构建好,改了代码才需要重新 build)

```bash
cd app
npm run build
```

### 4. 执行部署

```bash
bash deploy/deploy.sh
```

脚本会:本地打包 `dist/` → 上传 → 服务器原子替换 → `nginx -t && reload`。
完成后访问 `http://你的公网IP` 即可。

---

## 交给 Claude 自动部署

如果你想让我(Claude)直接在本地通过 SSH 连服务器把**①环境准备 + ②首次部署**一次做完,只需提供:

1. **ECS 公网 IP**
2. **登录用户名**(一般 `root`)
3. **私钥在本机的路径**(例如 `C:\Users\warri\.ssh\huawei_ecs.pem`)
4. **操作系统**(CentOS / Ubuntu / HuaweiOS?影响用 `yum` 还是 `apt`)

我会:远程装 nginx → 放 `cnatc.conf` → 跑部署脚本 → 验证站点可访问。

---

## 进阶(以后再做)

- **自定义域名**:把域名 A 记录解析到 ECS 公网 IP,再把 `nginx.conf` 里 `server_name _;` 改成你的域名。
- **HTTPS**:华为云 SSL 证书管理服务申请免费证书,下载 Nginx 版证书放到服务器,nginx 配 443 + `ssl_certificate`。
- **CDN 加速**:在前面套一层华为云 CDN,回源到 ECS,全国访问更快。

---

## 常见问题

| 现象 | 原因 / 解决 |
|------|------------|
| 访问 IP 一直转圈/超时 | 安全组没放行 **80** 端口 |
| 首页能开,但刷新 `/progress` 等子页 404 | nginx 缺 `try_files $uri $uri/ /index.html;`(本配置已含) |
| 发版后页面没变 | index.html 被浏览器/CDN缓存;本配置已对 index.html 设 `no-cache` |
| SSH 报 `Permission denied (publickey)` | 私钥路径不对、或用户名不是 root |
| SSH 报 `UNPROTECTED PRIVATE KEY FILE` | Windows 下私钥权限太开放,按上面 icacls 命令修复 |
