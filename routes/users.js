const express = require('express');
const app = express();

const connection = require('../library/database')

//route untuk homepage
app.get("/", (req, res) => {
  let sql = "SELECT * FROM users";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.render("users", {
      results: results,
    });
  });
});

//route untuk insert data
app.post("/save", (req, res) => {
  let data = {
    username: req.body.username,
    tgl_lahir: req.body.tgl_lahir,
  };
  let sql = "INSERT INTO users SET ?";
  connection.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//route untuk update data
app.post("/update", (req, res) => {
  let sql =
    "UPDATE users SET username='" +
    req.body.username +
    "', tgl_lahir='" +
    req.body.tgl_lahir +
    "' WHERE id=" +
    req.body.id;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});

//route untuk delete data
app.post("/delete", (req, res) => {
  let sql = "DELETE FROM users WHERE id=" + req.body.id + "";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/");
  });
});


module.exports = app;
