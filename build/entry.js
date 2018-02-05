/**
 * 创建入口文件map
 */

const fs = require('fs')
const mapping = require('../mapping/index')

module.exports = getEntries = (path) => {
    let test = /(.*)\.js/i
    let entries = {}
    fs.readdirSync(path).forEach((file) => {
        let t
        if ((t = test.exec(file)) !== null) {
            if (mapping.entriesExclude.indexOf(t[1]) == -1) {
                entries[t[1]] = `${path}/${file}`
            }
        }
    })

    return entries
}
 

