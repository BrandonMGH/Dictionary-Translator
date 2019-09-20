require('dotenv').config()
const axios = require("axios");

const apiKey = process.env.Merriam_API_Key
var wordValue = 'television'
const apiLink = `https://dictionaryapi.com/api/v3/references/collegiate/json/${wordValue}?key=${apiKey}`


function getWordValue () {
  document.getElementById('test').innerHTML=document.getElementById("wordInsert").value;
}
 




function defineWord () {
  console.log(wordValue)
    axios.get(apiLink)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }







