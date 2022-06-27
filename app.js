require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
var ejs = require('ejs'); 

app.get("/", (req, res) => {
    res.send("<code>ADA Indonesia Backend</code>");
});


app.listen(port, () => {
    console.log(`Aplikasi berjalan di port ${port}`);
});