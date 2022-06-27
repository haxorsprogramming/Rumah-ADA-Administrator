require("dotenv").config();

var API_SERVER = process.env.API_SERVER;

function loginPage(req, res){
    let dr = { judul: "Rumah ADA - ADA Info Community", api: API_SERVER };
    res.render("home", dr);
}

module.exports = { loginPage};