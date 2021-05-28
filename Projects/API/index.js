const express = require('express');
const app = epress();
const db = require("./queries.js");
const port = 3030;
const cors = require('cors');

app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: "Hi there!"})
});

app.get('/movie', (request, response) => {
    response.json({ info: "Batman"})
});

app.get('/movies', (request, response) => {
    response.json({ info: "Batman, Superman"})
});

app.listen(3030, () => {
    console.log("Server Running")
});