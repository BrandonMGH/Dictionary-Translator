require('dotenv').config()
const axios = require("axios");

const apiKey = process.env.Merriam_API_Key
var wordValue = ''
const apiLink = `https://dictionaryapi.com/api/v3/references/collegiate/json/${testWord}?key=${apiKey}`


function getWordValue () {
   wordValue=document.getElementById("wordInsert").value;
   console.log(wordValue)
//  console.log(wordValue)
// testWord.push(wordValue)
// setTimeout(function() {
  defineWord();
// }, 1000); 
}
 



let defineWord = () =>{
  console.log(wordValue)
    // axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${testWord[0]}?key=${apiKey}`)
    // .then(function (response) {
    //   // handle success
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
  }








