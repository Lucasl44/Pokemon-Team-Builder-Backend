const router = require("express").Router();
const { getTeam } = require("../utils/requests");


router.post("/team", async (req, res) => {
    res.status(200).json({msg: "Got team", data: await getTeam(req.body.pokemon)})
});

module.exports = router;