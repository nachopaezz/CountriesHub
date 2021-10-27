const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (Sequelize) => {
    // defino el modelo
    Sequelize.define('Activities',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        difficulty: {
            type: DataTypes.ENUM(['1', '2', '3', '4', '5']),
            allowNull: true,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM('["Winter", "Autumn", "Spring", "Summer"]'),
            allowNull: true
        },
    });
};