const { Pokemon } = require("../models/pokemon");

const getAllPokemon = async () => {
    return await Pokemon.findAll({});
};

const deleteDB = async () => {
    return await Pokemon.destroy({where: {}})
};

const createDB = async (body) => {
    for (let pokemon of body) {
        await Pokemon.create(pokemon)
    }
};

module.exports = {
    getAllPokemon,
    deleteDB,
    createDB
};