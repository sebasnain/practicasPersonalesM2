const router = require('express').Router();


const postPlayers  = require('../controllers/postPlayers');


 // crea una instancia del enrutador

// Ruta para crear un jugador
router.post('/jugadores', postPlayers);

module.exports = router;
