const router = require("express").Router();

router.get("/", async (req, res) => {
    res.status(201).json({ msg: "All Pokemon", data: await getAllPokemon()})
});

module.exports = router;