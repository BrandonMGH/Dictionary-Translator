require('dotenv').config()
const axios = require("axios");


const apiKey = process.env.Merriam_API_Key

const testKey = '4d8e095b-3c6a-4bc5-86e7-c8c5c4a83b9f'
const apiLink = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=${apiKey}`

let movieSelector = () =>{
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

movieSelector(); 

let getWordValue = () => {
    var number=document.getElementById("wordInsert").value; 
    console.log(number) 
}




