# 开发文档

## 本地运行

- 修改文档 `docs/README.md`
- 打包 `npm run build` ，将会生成 `dist/index.html`
- 启动服务 `http-server -p 8881` 然后访问 `localhost:8881/dist/index.html`

## 发布上线

- 提交代码到 master 分支，触发 github actions
- 重新启动 [gitee pages](https://gitee.com/what-is-fe/what-is-fe/pages) 服务
