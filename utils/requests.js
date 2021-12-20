const { Pokemon } = require("../models/pokemon");
const {  Normal,
    Fighting,
    Flying,
    Poison,
    Ground,
    Rock,
    Bug,
    Ghost,
    Steel,
    Fire,
    Water,
    Grass,
    Electric,
    Psychic,
    Ice,
    Dragon,
    Dark,
    Fairy } = require("../typeLogic");

const mainTypes = [ "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy" ];

const typeEffectiveness = [Normal, Fighting, Flying, Poison, Ground, Rock, Bug, Ghost, Steel, Fire, Water, Grass, Electric, Psychic, Ice, Dragon, Dark, Fairy]

let types = [];

const getTeam = async (body) => {
    let data = await Pokemon.findAll({ where: {pokemonName: [body]}});
    for (let i = 0; i < data.length; i++) {
        types.push(data[i].dataValues.typeOne);
        if (data[i].dataValues.typeTwo != null) {
            types.push(data[i].dataValues.typeTwo);
        }
    };
    let uniqueTypes = [... new Set(types)];
    for (let i = 0; i < uniqueTypes.length; i++) {
        for (let x = 0; x < typeEffectiveness.length; x++){
            if (uniqueTypes[i] === mainTypes[x]){
                let temp = typeEffectiveness[x];
                for (let y = 0; y < typeEffectiveness.length; y++){
                    console.log(temp[mainTypes[y]])
                    //run it from here getting close
                }
        }
    }
}

};



module.exports = { getTeam }; 