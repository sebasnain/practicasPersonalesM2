const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Player', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    equipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seleccion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  //nombre edad equipo seleccion
} 
  
