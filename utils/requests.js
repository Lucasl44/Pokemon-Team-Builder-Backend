const { Pokemon } = require("../models/pokemon");

const getTeam = async (body) => {
    let data = await Pokemon.findAll({ where: {pokemonName: [body]}});
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].dataValues);
    }

};

module.exports = { getTeam }; 