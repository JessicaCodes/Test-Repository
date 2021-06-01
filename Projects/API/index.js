const express = require('express');
const app = express();
const db = require("./queries.js");
const port = 3030;
const cors = require('cors');

app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: "Welcome to Jessica's Hip Hop database!!"})
});

app.get('/albums', db.getAlbum);
app.post('/addalbums', db.addAlbum);

app.get('/artist', db.getArtist);
app.post('/artist', db.addArtist);

app.get('/genre', db.getGenre);
app.post('/genre', db.addGenre);




app.listen(port, () => {
    console.log("Server Running")
});