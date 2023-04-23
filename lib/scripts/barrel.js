const fs = require('fs')
const glob = require('glob')
const cwd = process.cwd()

const writeBarrell = (filePath, imports, preContent = '') =>{

  // Remove duplicates
  imports = imports.filter((value, index, self) => index === self.findIndex((t) => (t.path === value.path)))
  
  const content = imports.map(({path, exports}) => `export { ${exports.map(({func, isDefault}) => isDefault ? `default as ${func}` : func).join(`, `)} } from '${path}'`).join('\n')
  const current = fs.readFileSync(filePath, 'utf8')
  if(current === preContent + content) return //console.log('no change')
  fs.writeFileSync(filePath, preContent + content)
  console.log(`Wrote "${filePath.replace(cwd, '')}" barrell export`)
}

const parseComponents = async () =>{

  const baseDir = `${cwd}/components`

  glob(`${baseDir}/**/*.tsx`, {}, function (er, files) {

    const imports = []
    files.forEach(file => {
      const exports = []
      fs.readFileSync(file, 'utf8').split('\n').forEach(line => {
        if(!line.trim().startsWith('export') || line.trim().startsWith('export type')) 
          return 
        
        const isDefault = line.indexOf('default') > -1
        const isDefaultFunc = line.indexOf('default function') > -1

        if(isDefault && isDefaultFunc){
          line = line.replace('export default function', '').trim()
          line = line.substring(0, line.indexOf('('))
        } else if(isDefault && !isDefaultFunc){
          line = line.replace('export default', '').replace(';', '').trim()
        }else{
          line = line.replace('export function', '').trim()
          line = line.substring(0, line.indexOf('('))
        }
        exports.push({func:line.trim(), isDefault})

      })

      let path = `.${file.replace(baseDir, '').replace('.tsx', '')}`
      if(path.endsWith('/index'))
        path = path.substring(0, path.lastIndexOf('/index'))

      imports.push({path, exports})

    })
    
    writeBarrell(`${baseDir}/index.ts`, imports.sort((a, b)=> a.path > b.path))

  })
}

const parseGraphql = () =>{

  const baseDir = `${cwd}/graphql`
  const files = fs.readdirSync(baseDir).filter(name => name.endsWith('.gql'))
  const imports = []

  files.forEach(file => {
    const i = {path:`./${file}`, exports:[]}
    fs.readFileSync(`${baseDir}/${file}`, 'utf8').split('\n').forEach(line => {
      if(line.startsWith('query')){
        let q = line.replace('query ', '')
        const idx = q.indexOf('(') > -1 ? q.indexOf('(') : q.indexOf('{')
        i.exports.push({func:q.substring(0, idx).trim(), isDefault:false})
      }
    })
    imports.push(i)
  })
  
  writeBarrell(`${cwd}/graphql/index.ts`, imports.sort((a, b)=> a.path > b.path), '// @ts-nocheck\n')
}

//parseGraphql()
parseComponents()



