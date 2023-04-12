# Repositorio
https://github.com/BryanC7/Portafolio-Talento-Digital.git
## Instrucciones para la ejecucción del proyecto  
1. Para que el proyecto funcione correctamente es necesario la instalación de: ```node.js``` ```postgreSQL```.
2. Ejecutar mediante terminal el comando ```npm i``` se realizarán las instalaciones de todas las dependencias implementadas.
3. Ejecutar ```npx sequelize-cli init``` para la creación de carpetas con las configuraciones por defecto de sequilize.
4. Ir a la carpeta config, abrir el archivo config.json y modificar el objeto ```development``` con los datos personales de tu conexión de postgreSQL.
5. Para la creación de la base de datos ejecutar ```npm run create-db```
6. Finalmente, en la terminal ejecutar ```npm run init-back``` para arrancar el proyecto. Una vez iniciado, acceder en el navegador a "http://localhost:3000/index"