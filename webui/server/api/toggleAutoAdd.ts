export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const configFile = '/data/adb/tricky_store/auto_add_config'
  
  if (body.enabled) {
    require('fs').writeFileSync(configFile, 'enabled')
  } else {
    require('fs').writeFileSync(configFile, 'disabled')
  }
  
  return { success: true }
})
