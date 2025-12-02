const express = require("express");
const port = 3000;

let { bio, movies } = require("./data");

let app = express();

app.use(express.static("../client/"));

app.get("/bio", (req, res) => {
    const message = "Successfully retrieved";
    res.send({ message, bio });
});

// implementirati dohvaćanje, stvaranje i brisanje filmova
app.get("/movies", (req, res) => {
    res.send(movies);
});

app.listen(port, console.log("Server is running"));