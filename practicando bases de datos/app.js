const express = require('express');
const server = express();
const router = require('./routes/playerRoutes');
const { conn } = require('./bd')

conn.sync({ force:true}).then(()=>{
   /*  server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); 
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE' 
        );
        next();
     });
      */

     server.use(express.json());  /* Crea un middleware que ejecute a express.json(). */
     server.use('/play', router)  /**Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas. en como esto complementa la ruta si no esta esto la ruta no estaria completa. agrega un path antes de los anteriores */
     
     server.listen(3001, () => {
        console.log('Server raised in port: ' + 3001);
     });
     
     
 })