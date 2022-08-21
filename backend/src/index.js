import app from './app';

const main = ()=> {
  // Ejecución del servidor
  app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}

main()