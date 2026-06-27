# CNATC 运动防护与运康学习网 — 技术规格

## 开发环境

- **Node.js**: 20+ (LTS)
- **包管理器**: npm
- **构建工具**: Vite 6.x
- **项目路径**: `/mnt/agents/output/app`

## 技术栈

| 类别 | 技术选型 | 版本 |
|------|----------|------|
| 框架 | React | 19.x |
| 语言 | TypeScript | 5.7.x |
| 路由 | react-router-dom | 7.x |
| 样式 | Tailwind CSS | 3.4.x |
| UI组件 | shadcn/ui | latest |
| 动画 | GSAP + ScrollTrigger | 3.12.x |
| 图标 | Lucide React | latest |

## 依赖清单

### 核心依赖（项目初始化自带）

| 包名 | 用途 |
|------|------|
| react | UI框架 |
| react-dom | DOM渲染 |
| typescript | 类型系统 |
| vite | 构建工具 |
| tailwindcss | 原子化CSS |
| @radix-ui/* | shadcn/ui底层 |
| class-variance-authority | 组件变体管理 |
| clsx | 条件类名 |
| tailwind-merge | Tailwind类名合并 |
| lucide-react | 图标库 |

### 额外依赖（需安装）

```bash
npm install react-router-dom gsap @types/gsap
```

| 包名 | 用途 | 说明 |
|------|------|------|
| react-router-dom | 多页面路由 | 6个页面导航，支持页面间独立滚动 |
| gsap | 动画引擎 | 页面加载序列编排、滚动触发动画、数字计数器 |
| @types/gsap | GSAP类型定义 | TypeScript类型支持 |

### shadcn/ui 组件（按需安装）

```bash
npx shadcn add button input textarea dialog sheet
```

| 组件 | 用途 | 安装命令 |
|------|------|----------|
| Button | CTA按钮、表单提交 | `npx shadcn add button` |
| Input | 表单输入框 | `npx shadcn add input` |
| Textarea | 留言文本域 | `npx shadcn add textarea` |
| Dialog | 联系表单弹窗 | `npx shadcn add dialog` |
| Sheet | 移动端侧边导航 | `npx shadcn add sheet` |

## 组件清单

### 布局组件（全局共享）

| 组件名 | 来源 | 复用 | 说明 |
|--------|------|------|------|
| Navbar | 自定义 | 所有页面 | 固定导航栏，含滚动响应高度变化、下拉菜单、移动端汉堡菜单 |
| MobileMenu | 自定义(Sheet) | 所有页面 | 移动端全屏导航面板，基于shadcn Sheet |
| Footer | 自定义 | 所有页面 | 版权信息区 |
| PageLoader | 自定义 | 所有页面 | 页面加载遮罩，GSAP编排淡出序列 |

### 页面区块组件（按页面）

#### 首页 (index.md)

| 组件名 | 说明 |
|--------|------|
| HeroSection | 全屏视频背景 + 品牌宣言 + 入场动画 |
| CoreBusiness | 2×2网格四大业务卡片，交错布局 |
| ExcellentServices | 三列服务卡片 |
| VideoSection | 全宽品牌理念视频 |
| DataPerformance | 数据展示 + 数字计数器 + 运动员图片 |
| ServiceNetwork | 城市名称文字云网格 |

#### 防护进展 (hu_fa_jin_zhan.md)

| 组件名 | 说明 |
|--------|------|
| NewsHero | 图片背景Hero |
| NewsCards | 4列新闻卡片网格 + 加载更多 |
| CertificationCourses | 横向滚动课程卡片 |
| EventProtection | 图文交替编辑式布局 |

#### 非凡服务 (fei_fan_fu_wu.md)

| 组件名 | 说明 |
|--------|------|
| ServiceHero | 图片背景Hero |
| ServiceNetworkGrid | 2×2图片网格 |
| TeamTravel | 全宽照片故事（3组） |
| FirstAidScience | 交错布局科普文章 |

#### 防护学堂 (fang_hu_xue_tang.md)

| 组件名 | 说明 |
|--------|------|
| AcademyHero | 图片背景Hero |
| CourseShowcase | 3列课程卡片（含价格标签） |
| CourseOverview | 横向滚动课程系列 |
| AlumniStories | 3列校友故事卡片 |
| MoreCourses | 大型CTA导航按钮 |

#### 在线商城 (shang_cheng.md)

| 组件名 | 说明 |
|--------|------|
| ShopHero | 图片背景Hero |
| ProductCards | 3列商品卡片（含原价/现价） |

#### 联系我们 (lian_xi.md)

| 组件名 | 说明 |
|--------|------|
| ContactHero | 图片背景Hero（含联系信息） |
| ContactForm | 左右分栏表单 |
| MapSection | 嵌入地图 + 浮动信息卡片 |

### 可复用组件

| 组件名 | 来源 | 使用位置 | 说明 |
|--------|------|----------|------|
| HeroSection | 自定义 | 所有子页面 | 通用图片背景Hero，支持有无视频两种入场模式 |
| SectionHeader | 自定义 | 所有区块 | 统一的区块标题+描述，支持Slide Up/Fade In动画 |
| ScrollReveal | 自定义 | 所有区块 | 基于IntersectionObserver的滚动触发动画包装器 |
| AnimatedCounter | 自定义 | 首页数据区 | GSAP数字递增动画 |
| CityNameCloud | 自定义 | 首页服务网络 | 流式城市名称文字云 |
| ProductCard | 自定义 | 商城页 | 商品卡片（图片/名称/描述/价格/购买按钮） |
| NewsCard | 自定义 | 防护进展页 | 新闻卡片（图片/日期/标题/摘要） |
| CourseCard | 自定义 | 防护学堂页 | 课程卡片（图片/标签/名称/时长/描述/价格） |
| PillTag | 自定义 | 多处 | 药丸形标签（支持多种颜色变体） |

### Hooks

| Hook名 | 用途 |
|--------|------|
| useScrollReveal | IntersectionObserver封装，支持多种入场动画类型 |
| useNavbarScroll | 监听滚动状态，控制导航栏高度变化 |
| usePageLoad | 页面加载动画序列编排 |
| useHorizontalScroll | 横向滚动容器（鼠标滚轮转横向） |

## 动画实现方案

| 动画 | 库 | 实现方式 | 复杂度 |
|------|-----|----------|--------|
| 页面加载序列（4步骤） | GSAP Timeline | `gsap.timeline()` 编排4步骤时序 | 高 |
| Hero视频淡入+缩放 | GSAP | `gsap.to()` opacity + scale | 低 |
| Hero图片淡入+缩放 | GSAP | `gsap.to()` opacity + scale | 低 |
| 标题模糊入场（blur+y+opacity） | GSAP | `gsap.to()` filter blur + y + opacity, stagger | 中 |
| Fade In（淡入） | GSAP ScrollTrigger | ScrollTrigger触发 `gsap.to()` opacity | 低 |
| Slide Up（从下方滑入） | GSAP ScrollTrigger | ScrollTrigger触发 `gsap.to()` y + opacity | 低 |
| Staggered Fade In（交错入场） | GSAP ScrollTrigger | ScrollTrigger + stagger参数 | 中 |
| Number Counter（数字递增） | GSAP | `gsap.to()` 配合自定义onUpdate回调 | 中 |
| Hero Scale（图片缩放） | GSAP ScrollTrigger | ScrollTrigger触发 scale | 低 |
| 导航栏滚动响应 | CSS + Hook | `useNavbarScroll` 监听scroll，切换class | 低 |
| 下拉菜单展开 | CSS Transition | opacity + translateY, 200ms | 低 |
| 汉堡菜单展开 | shadcn Sheet | Sheet组件内置动画 | 低 |
| 卡片悬停上移 | CSS Transition | translateY + box-shadow, 400ms | 低 |
| 按钮悬停渐变 | CSS Transition | background + color, 400ms | 低 |
| 横向滚动吸附 | CSS | `scroll-snap-type: x mandatory` | 低 |
| 表单提交成功提示 | CSS Transition | opacity淡入 | 低 |

## 状态与逻辑

### 路由结构

```
/                   → 首页
/progress           → 防护进展
/services           → 非凡服务
/academy            → 防护学堂
/shop               → 在线商城
/contact            → 联系我们
```

### 状态管理

- **React Router** 管理页面路由，无需全局状态库
- **useState** 管理表单输入、移动端菜单开关、下拉菜单开关等局部状态
- **useRef** 管理GSAP动画目标元素引用
- **无全局状态库**（项目规模适中，无需Redux/Zustand）

### 页面加载动画流程

每页独立触发GSAP Timeline序列：

1. 加载遮罩淡出（1000ms）
2. 背景图片/视频淡入+缩放（2000ms）
3. 标题逐行入场（blur→0, y→0, 800ms, stagger 300ms）
4. CTA按钮淡入（延迟2000ms）

### 滚动触发动画

全局使用IntersectionObserver检测元素进入视口，由`useScrollReveal` Hook统一处理：

- 一次性触发（非持续），触发阈值10%
- 支持5种动画类型：Fade In、Slide Up、Staggered Fade In、Number Counter、Hero Scale
- 通过data属性配置动画类型和延迟参数

## 字体加载

```html
<!-- Google Fonts CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
```

西文/数字使用系统字体栈：`Impact, 'Arial Black', sans-serif`

## 关键实现决策

### 视频处理

- Hero背景视频使用`<video>`标签，`autoPlay muted loop playsInline`属性
- 视频文件通过Vite的`public/`目录提供，不作为模块导入
- 第二视频区（品牌理念）同样使用`<video>`标签

### 图片资源

- 所有图片通过Vite的`public/images/`目录提供
- 使用响应式`srcSet`或CSS`object-fit`处理不同尺寸
- Hero图片使用高分辨率版本（1920px+）

### 地图集成

- 使用Google Maps Embed API或静态地图图片
- 暗色主题地图样式匹配页面设计
- 浮动信息卡片使用CSS绝对定位 + backdrop-filter模糊

### 第三方商城跳转

- 在线商城页面为展示型（站内商品卡片）
- 购买按钮使用`<a>`标签 + `target="_blank" rel="noopener noreferrer"`跳转外部商城
- 无需电商后端集成
