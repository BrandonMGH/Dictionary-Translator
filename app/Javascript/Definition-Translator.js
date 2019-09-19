require('dotenv').config()
const axios = require("axios");


const apiKey = process.env.Merriam_API_Key
let testWord = ''
const apiLink = `https://dictionaryapi.com/api/v3/references/collegiate/json/${testWord}?key=${apiKey}`

function getWordValue () {
  var wordValue=document.getElementById("wordInsert").value; 
 console.log(wordValue)
 defineWord(wordValue);
}

let defineWord = (insertedWord) =>{
    axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${insertedWord}?key=${apiKey}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

defineWord("help")






