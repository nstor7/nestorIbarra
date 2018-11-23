const config = require('./config')
const app = require('./app')

  app.listen(3000, () => {
   console.log(`Api Rest corriendo en el puerto ${config.port}`)
  })
