/**
 * @description 构建 html
 * @author 王福朋
 */

const path = require('path')
const { Transformer } = require('markmap-lib')
const fse = require('fs-extra')
const { genTpl } = require('./tpl')

/**
 * 获取 markdown 内容
 */
function getMarkdown() {
    const filePath = path.resolve(__dirname, '..', 'docs', 'README.md')
    const content = fse.readFileSync(filePath)
    return content.toString()
}

/**
 * 输出 html 文件
 * @param {string} html html 内容
 */
function outputHtml(html = '') {
    const distDir = path.resolve(__dirname, '..', 'dist')
    fse.ensureDirSync(distDir)

    const filePath = path.join(distDir, 'index.html')
    fse.ensureFileSync(filePath)

    fse.outputFileSync(filePath, html)
}

function main() {
    // 获取 markdown 的内容
    const markdown = getMarkdown()
    
    // 1. transform markdown
    const transformer = new Transformer()
    const { root, features } = transformer.transform(markdown)

    // 2. get assets required by used features
    const { styles, scripts } = transformer.getAssets()

    const html = genTpl(root, styles, scripts)
    outputHtml(html)
}

main()
