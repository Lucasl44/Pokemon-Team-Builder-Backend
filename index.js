require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./connection");

const { Pokemon } = require("./models/pokemon");

const requestRouter = require("./routes/requests");
const pokemonDBRouter = require("./routes/pokemon");

app.use(express.json());
app.use(cors());

app.use("/test", (req, res) => {
    res.send("Hello World")
});
app.use("/pokemon", requestRouter);
app.use("/database", pokemonDBRouter);

app.listen(process.env.PORT, async () => {
    connection.authenticate();
    await Pokemon.sync({ alter: true });
    console.log("App Online")
});