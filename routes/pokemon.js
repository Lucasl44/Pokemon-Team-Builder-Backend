const router = require("express").Router();
const { getAllPokemon, deleteDB, createDB } = require("../utils/pokemonDB");

router.get("/", async (req, res) => {
    res.status(200).json({ msg: "All Pokemon", data: await getAllPokemon()})
});

router.post("/", async (req, res) => {
    res.status(200).json({msg: "Added Pokemon", data: await createDB(req.body.pokemon)})
});

router.delete("/", async (req, res) => {
    res.status(200).json({ msg: "Deleted Database", data: await deleteDB()})
});

module.exports = router;