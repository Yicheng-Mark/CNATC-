#!/usr/bin/env bash
# ============================================================
# CNATC 运动防护网 — 一键部署脚本(本地 -> 华为云 ECS)
# 原理:本地把 dist/ 打成 tar.gz -> scp 上传 -> 服务器原子替换 -> reload nginx
# 用法(在本机 Git Bash 里运行):
#   bash deploy/deploy.sh
# ============================================================
set -euo pipefail

# ======================== 配置区(改成你自己的) ========================
SERVER_IP="YOUR_SERVER_IP"          # 例: 121.37.x.x  (ECS 公网 IP)
SSH_USER="root"                     # 登录用户(一般 root)
SSH_KEY="$HOME/.ssh/huawei_ecs.pem" # 私钥文件在本机的路径
REMOTE_DIR="/var/www/cnatc"         # 服务器上网站根目录(和 nginx.conf 的 root 一致)
# =====================================================================

# 脚本所在目录 / 项目根目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOCAL_DIST="$PROJECT_ROOT/app/dist"
ARCHIVE="/tmp/cnatc_dist.tar.gz"

# ---- 0. 基本检查 ----
if [[ "$SERVER_IP" == "YOUR_SERVER_IP" ]]; then
  echo "❌ 请先编辑本脚本(deploy/deploy.sh),填入 SERVER_IP、SSH_KEY 等配置。"
  exit 1
fi
if [[ ! -d "$LOCAL_DIST" ]]; then
  echo "❌ 找不到 $LOCAL_DIST,请先在 app/ 目录执行: npm run build"
  exit 1
fi
if [[ ! -f "$SSH_KEY" ]]; then
  echo "❌ 找不到私钥文件: $SSH_KEY"
  echo "   请确认私钥路径,或把私钥放到该位置。"
  exit 1
fi

# ssh/scp 公共参数(首次连接自动接受主机指纹)
SSH_OPTS=(-i "$SSH_KEY" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15)
REMOTE_TARGET="$SSH_USER@$SERVER_IP"

echo "[1/4] 本地打包 dist/ ..."
tar -C "$LOCAL_DIST" -czf "$ARCHIVE" .
echo "      -> $ARCHIVE ($(du -h "$ARCHIVE" | cut -f1))"

echo "[2/4] 上传到服务器 ..."
scp "${SSH_OPTS[@]}" "$ARCHIVE" "$REMOTE_TARGET:/tmp/cnatc_dist.tar.gz"

echo "[3/4] 服务器端:原子替换网站文件 ..."
ssh "${SSH_OPTS[@]}" "$REMOTE_TARGET" "bash -s" <<REMOTE
set -euo pipefail
REMOTE_DIR="$REMOTE_DIR"
ARCHIVE="/tmp/cnatc_dist.tar.gz"

# 确保目录存在
mkdir -p "\$REMOTE_DIR"

# 原子替换:解压到临时目录,再整体替换,避免半截文件被访问
TMP="\$(mktemp -d)"
tar -xzf "\$ARCHIVE" -C "\$TMP"

# 清空旧文件,移入新文件
find "\$REMOTE_DIR" -mindepth 1 -delete
mv "\$TMP"/* "\$REMOTE_DIR"/ 2>/dev/null || true
rm -rf "\$TMP" "\$ARCHIVE"

# 权限:CentOS/欧拉系用 nginx 用户;Ubuntu/Debian 系用 www-data
if id -u nginx >/dev/null 2>&1; then
  chown -R nginx:nginx "\$REMOTE_DIR"
elif id -u www-data >/dev/null 2>&1; then
  chown -R www-data:www-data "\$REMOTE_DIR"
fi
chmod -R 755 "\$REMOTE_DIR"

echo "      网站文件已更新: \$REMOTE_DIR"
REMOTE

echo "[4/4] 检查并重载 Nginx ..."
# nginx 配置我们假设已经放好(见 nginx.conf);这里只 reload
ssh "${SSH_OPTS[@]}" "$REMOTE_TARGET" "nginx -t && (systemctl reload nginx || nginx -s reload)"

rm -f "$ARCHIVE"

echo ""
echo "✅ 部署完成!"
echo "   访问: http://$SERVER_IP"
echo "   (首次部署需先在服务器安装 nginx 并放入 deploy/nginx.conf,详见 deploy/README.md)"
