require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const authLib = require("./auth-lib");

var ejs = require("ejs");
var API_SERVER = process.env.API_SERVER;
var PATH_SERVER = process.env.PATH_SERVER;

ejs.open = "{{";
ejs.close = "}}";

app.use(express.static("public"));
app.set("views", "./bind");
app.set("view engine", "ejs");

// Main app
app.get("/", (req, res) => {
  authLib.loginPage(req, res);
});

app.get("/dashboard", (req, res) => {
  let dr = { judul: "Rumah ADA - ADA Info Community", api: API_SERVER, pathServer : PATH_SERVER};
  res.render("main/dashboard", dr);
});

app.get("/beranda", (req, res) => {
  res.render("main/beranda");
});

app.get("/app/post/data", (req, res) => {
  res.render("main/post/post");
});

app.get("/app/post/tambah", (req, res) => {
  res.render("main/post/form-tambah-post");
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
