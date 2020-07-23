# 开发文档

本项目基于 gitbook 开发

## 启动项目

- git clone 项目
- 安装插件 `npm install`
- 启动 `npm run dev`

## 手动构建

- 运行 `npm run build`
- 结果输出到 `_book` 文件夹

## 发布

- 提交代码到 `master` 分支，会触发 [github actions](https://github.com/wangfupeng1988/what-is-fe/actions)
- 等待 github actions 执行完成
- 手动更新 [gitee pages](https://gitee.com/what-is-fe/what-is-fe/pages) （免费版，需要手动更新，这点不如 github pages）

## 修改 gitbook 配置

- 修改 `book.json`
- 运行 `npm run gitbook-install`
- 重新启动，或重新构建
- 提交代码
