'use strict'
const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const path = require('path')


/* input and output paths */
const inputFile = './dist/es-aux.js'
const outputDir = `${__dirname}`
/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({ files: inputFile })
/* reduce templateData to an array of class names */
// const classNames = templateData.reduce((classNames, identifier) => {
//   if (identifier.kind === 'class') classNames.push(identifier.name)
//   return classNames
// }, [])

// /* create a documentation file for each class */
// for (const className of classNames) {
//   const template = `{{#class name="${className}"}}{{>docs}}{{/class}}`
// console.log(`rendering ${className}, template: ${template}`)
//   const output = jsdoc2md.renderSync({ data: templateData, template: template })
//   fs.writeFileSync(path.resolve(outputDir, `${className}.md`), output)
// }


const bodyParamsList = `{{#if params}}
{{#params}}**参数**

{{#each this~}}
{{indent}}- {{name}}{{#if type}} {{>linked-type-list types=type.names delimiter=" | " }}{{/if}}{{#unless (equal defaultvalue undefined)}} {{>defaultvalue equals=true ~}}{{/unless}}{{#if description}} - {{{inlineLinks description}}}{{/if}}
{{/each}}
{{/params~}}
{{/if}}`

const bodyParamsTable = `{{#if params}}
{{tableHead params "name|参数" "type|类型" "defaultvalue|默认值" "description|描述" ~}}

{{#tableRow params "name" "type" "defaultvalue" "description" ~}}
| {{#if @col1}}{{>param-table-name}} | {{/if~}}
{{#if @col2}}{{>linked-type-list types=type.names delimiter=" \| " }} | {{/if~}}
{{#if @col3}}{{>defaultvalue}} | {{/if~}}
{{#if @col4}}{{{stripNewlines (inlineLinks description)}}} |{{/if}}
{{/tableRow}}

{{/if}}`

const body = `{{>deprecated~}}
&emsp;&emsp;{{>description~}}
{{>summary~}}
{{>augments~}}
{{>implements~}}
{{>mixes~}}
{{>default~}}
{{>chainable~}}
{{>overrides~}}
{{>returns~}}
{{>category~}}
{{>throws~}}
{{>fires~}}
{{>this~}}
{{>access~}}
{{>readOnly~}}
{{>requires~}}
{{>customTags~}}
{{>see~}}
{{>since~}}
{{>version~}}
{{>authors~}}
{{>license~}}
{{>copyright~}}
{{>todo~}}
{{#if (optionEquals "param-list-format" "list")}}${bodyParamsList}{{/if~}}
{{#if (optionEquals "param-list-format" "table")~}}
{{#if (optionEquals "no-gfm" true)}}{{>params-table-html~}}{{else}}${bodyParamsTable}{{/if~}}
{{/if~}}
{{>properties~}}
{{>examples~}}
----`

const allDocs = `
{{#orphans ~}}
<a id="{{{anchorName}}}"></a>
{{>heading-indent}}{{>sig-name}}
${body}
{{>member-index~}}
{{>separator~}}
{{>members~}}
{{/orphans~}}`


let template = `# es-aux
&emsp;&emsp;JavaScript开发辅助函数库。

# 函数
{{#if (showMainIndex)~}}
{{>module-index~}}
{{/if~}}
${allDocs}
`
const output = jsdoc2md.renderSync({ data: templateData, template })
fs.writeFileSync(path.resolve(outputDir, `README.md`), output)
