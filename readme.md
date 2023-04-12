# Repositorio
https://github.com/BryanC7/Portafolio-Talento-Digital.git
## Instrucciones para la ejecucción del proyecto  
1. Para que el proyecto funcione correctamente es necesario la instalación de: ```node.js``` ```postgreSQL```.
2. Ejecutar mediante terminal el comando ```npm i``` para llevar a cabo las instalaciones de todas las dependencias implementadas.
3. Ir a la carpeta config, abrir el archivo config.json y modificar el objeto ```development``` con los datos personales de tu conexión de postgreSQL.
4. Para la creación de la base de datos ejecutar ```npm run create-db```
5. Para la creación de tablas a la base de datos ejecutar ```npx sequelize-cli migrate:db```
6. Finalmente, en la terminal ejecutar ```npm run init-back``` para arrancar el proyecto. Una vez iniciado, acceder en el navegador a "http://localhost:3000/index"