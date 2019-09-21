const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config()

console.log(process.env.Merriam_API_Key)

module.exports = {
  apiKey: process.env.Merriam_API_Key,
};

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../app/Html/Dictionary-Translate.html"));
  });

app.get("/api")


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
