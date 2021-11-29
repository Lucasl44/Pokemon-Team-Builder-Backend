const { Pokemon } = require("../models/pokemon");

const getAllPokemon = async () => {
    return await Pokemon.findAll({});
};

const deleteDB = async () => {
    return await Pokemon.destroy({where: {}})
};

const createDB = async (body) => {
    for (let item of body) {
        Pokemon.create({pokemonName: item[0].pokemonName, typeOne: item[0].typeOne, typeTwo: item[0].typeTwo});
    }
};

module.exports = {
    getAllPokemon,
    deleteDB,
    createDB
};