# Yuting Zhong · 个人学术主页

> 👉 **主页 / Homepage: https://zyt2312.github.io** — Yuting Zhong (yutingzhong, 钟玉婷),
> MSc student in Data Science, University of Macau.

钟玉婷的个人主页源码 —— 一个单页、双语(EN / 中)、纯 HTML + CSS 的静态站点。
线上地址:**https://zyt2312.github.io**

## 文件结构

```
.
├── index.html        # 页面内容 —— 改文字主要改这里
├── css/style.css     # 样式（顶部 :root 里改配色 / 字体 / 宽度）
├── js/main.js        # 语言切换（EN / 中）逻辑
├── images/1.jpg      # 头像
├── sitemap.xml       # 站点地图（给搜索引擎）
└── robots.txt        # 爬虫规则
```

## 本地预览

直接双击 `index.html` 即可在浏览器查看，改完刷新即可，无需安装任何工具。

## 修改内容

- **文字 / 链接**：打开 `index.html`，每个 `§` 小节对应页面一个板块；双语内容分别在 `<span class="en">` 与 `<span class="zh">` 里。
- **配色**：改 `css/style.css` 顶部 `:root` 的颜色变量（`--accent` 为主题色，当前墨绿 `#1f5c3a`）。
- **头像**：替换 `images/1.jpg`，或修改 `index.html` 里 `<img class="avatar">` 的路径。

## 发布更新

改完后在本目录运行：

```bash
git add -A
git commit -m "更新内容"
git push
```

推送后等 1–2 分钟，https://zyt2312.github.io 会自动更新。

## 搜索收录（SEO）

页面已内置 `<meta>`、JSON-LD 结构化数据、`sitemap.xml` 与 `robots.txt`。
要被 Google 收录，在 [Google Search Console](https://search.google.com/search-console)
添加并验证 `https://zyt2312.github.io`，再提交 `sitemap.xml`。
