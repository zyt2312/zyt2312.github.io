# 个人学术主页

仿照 https://dbhaskarganesh.me/ 风格的单页静态主页：衬线字体、编号分节、无框架、纯 HTML + CSS。

## 文件结构

```
Pages/
├── index.html        # 主页面 —— 内容都在这里改
├── css/style.css     # 样式（顶部 :root 里改配色/字体/宽度）
├── assets/
│   └── photo.jpg      # 你的头像（自己放进来，正方形最好，约 400×400）
└── README.md
```

## 第一步：本地预览

直接双击 `index.html` 就能在浏览器里看到效果。
改完内容刷新页面即可，无需安装任何东西。

## 第二步：填内容

打开 `index.html`，把所有占位文字替换成你自己的：
- 顶部：姓名、中文名、学校、邮箱、各个链接（GitHub / Scholar / X）
- 各 §小节：About、Research、News、Education、Experience、Projects、Publications…
- 用不到的小节，整段删掉即可；想加内容就复制一个 `.entry` 块改。
- 把头像图片放到 `assets/photo.jpg`（或改 `index.html` 里的图片路径）。

改配色：打开 `css/style.css`，改最上面 `:root` 里的颜色变量（比如 `--accent` 是链接和强调色）。

## 第三步：发布到 GitHub Pages（免费）

1. 注册并安装 [Git](https://git-scm.com/download/win)、注册 [GitHub](https://github.com) 账号。
2. 在 GitHub 上新建一个仓库，命名为 **`你的用户名.github.io`**（这个命名很关键）。
3. 在本文件夹里打开终端（PowerShell），运行：

   ```powershell
   git init
   git add .
   git commit -m "init homepage"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git push -u origin main
   ```

4. 等 1–2 分钟，访问 `https://你的用户名.github.io` 就能看到你的主页了。
   （仓库 Settings → Pages 里可确认部署状态。）

## 第四步（可选）：绑定自己的域名

参考站用的是 `.me` 域名。流程：
1. 在域名商（Namecheap / 阿里云 / Cloudflare 等）买一个域名。
2. 仓库根目录新建一个名为 `CNAME` 的文件，里面写你的域名（如 `yourname.me`）。
3. 在域名商后台把 DNS 指向 GitHub Pages（A 记录指向 GitHub 的 IP，或 CNAME 指向 `你的用户名.github.io`）。
4. 仓库 Settings → Pages → Custom domain 填入域名并勾选 Enforce HTTPS。

具体 DNS 记录见 GitHub 官方文档：搜索 "GitHub Pages custom domain"。
