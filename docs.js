'use strict'
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const path = require('path')

const inputFile = './dist/es-aux.js'
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile })

let templateList = {}
templateData.forEach(item => {
  if (item.memberof) {
    const memberof = item.memberof.substring(7)
    templateList[memberof] = templateList[memberof] ? [
      ...templateList[memberof],
      item
    ] : [item]
  }
})

let readme = `# es-aux
&emsp;&emsp;JavaScript开发辅助函数库。

# 安装
\`\`\`bash
npm i -S es-aux
\`\`\`

# 使用
\`\`\`js
const Aux = require('es-aux')
// or
const { camelToKebab } = require('es-aux')

import * as Aux from 'es-aux'
// or
import { camelToKebab } from 'es-aux'
\`\`\`

# 助手函数列表
`
const docsPath = 'https://github.com/staven630/es-aux/blob/master/docs'

function renderFnList(item, template, filepath) {
  return `${template}
* [${item.name}: ${item.description}](${docsPath}/${filepath}.md#${item.name})`
}

function renderDoc(item) {

  let paramList = ``
  let paramStr = ``
  let examples = ``
  if (item.examples) {
    item.examples.forEach(o => {
      examples = `${examples}
${o}`
    })
  }
  if (examples) {
    examples = `##### 示例：
${examples}`
  }
  let returnType = ''
  if (item.returns) {
    const returnVal = item.returns[0]
    returnType = returnVal.type ? returnVal.type.names[0] : ''
  }

  item.params.forEach((param, index) => {
    if (param.name) {
      let paramName = param.optional ? `[${param.name}]` : param.name;
      let paramType = 'Any';
      if (param.type && param.type.names) {
        paramType = param.type.names[0]
      }
      paramType.replace('*', 'Any')
      let paramDv = param.defaultvalue || ''
      let paramDes = param.description || ''
      paramList = `${paramList}
| ${paramName} | ${paramType} | ${paramDv} | ${paramDes} |`
      if (paramType) {
        const type = paramType.replace(/\//gi, '|').replace(/\./gi, '')
        paramStr = index === item.params.length - 1 ? `${param.name}: ${type}` : `${param.name}: ${type}, `
      } else {
        paramStr = index === item.params.length - 1 ? `${param.name}` : `${param.name}, `
      }
    }
  })

  paramStr = returnType ? `(${paramStr}) => ${returnType.replace(/\./gi, '')}` : `(${paramStr})`

  paramList = paramList ? `##### 形参列表：
| 参数 | 类型  |  默认值         | 描述 |
| :--- | :---- | :------------- |:---- |${paramList}` : ''

  returnType = returnType ? `
##### 返回值：${returnType.replace(/\//gi, '|')}` : ''

  return `### <span id="${item.name}">♥ ${item.name}${paramStr}</span>
&emsp;&emsp;${item.description}

${paramList}

${returnType}

${examples}

[▲ 回顶部](#top)`
}

try {
  fs.mkdirSync(path.resolve(__dirname, 'docs'))
} catch (error) {

}

for (const type in templateList) {
  const [name, filepath] = type.split('-')
  let readmeStr = `### ${name}`;
  let doc = `# ${name}

<span id="top">目录</span>`
  let docList = ``
  for (let i = 0; i < templateList[type].length; i++) {
    const item = templateList[type][i]
    readmeStr = renderFnList(item, readmeStr, filepath)
    doc = `${doc}
* [ ${item.name}: ${item.description}](#${item.name})`
    docList = `${docList}
${renderDoc(item)}`
  }
  readme = `${readme}
${readmeStr}`
  doc = `${doc}

${docList}`
  fs.writeFileSync(path.resolve(__dirname, `docs/${filepath}.md`), doc)
}

fs.writeFileSync(path.resolve(__dirname, `README.md`), readme)
