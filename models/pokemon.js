const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Pokemon = connection.define("Pokemon", 
    {
        pokemonName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        typeOne: {
            type: DataTypes.STRING,
            allowNull: false
        },
        typeTwo: {
            type: DataTypes.STRING
        }
    },
    {
        indexes: [{unique: true,
        fields: ["pokemonName"] }]
    }
);

module.exports = { Pokemon };