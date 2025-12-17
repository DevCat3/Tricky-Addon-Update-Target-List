export default defineEventHandler(() => {
  const configFile = '/data/adb/tricky_store/auto_add_config'
  const fs = require('fs')
  
  if (!fs.existsSync(configFile)) {
    return { enabled: false }
  }
  
  const status = fs.readFileSync(configFile, 'utf8').trim()
  return { enabled: status === 'enabled' }
})
