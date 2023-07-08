const { Player } = require('../bd');

const postPlayers = async (req , res) => {
   try {
        const { nombre , edad , equipo , seleccion } = req.body
        
        if ( !nombre || !edad || !equipo || !seleccion) {
          return res.status(401).send('Faltan datos');
        }
       const allPlayers = await Player.create({
         nombre , edad , equipo , seleccion })

      
       
        return res.json(allPlayers)
   } catch (error) {
        return res.status(500).json(error.message)
   }
} 


module.exports = postPlayers;



