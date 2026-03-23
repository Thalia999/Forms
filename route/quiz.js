const express   = require('express');
const router    = express.Router();
const {readFile} = require('fs').promises;


router.get("/", (req, res) => {

});
let getWords = async () => {

}

let getRandomPart =()=>{
    let parts = ["noun", "verb", "adjective"];
    let randomIndex = Math.floor(Math.random() * parts.length);
    let randomPart = parts[randomIndex];
    return randomPart;
}
let shuffle = (array) => {
    for (let i =0; i < array.length-1 ;i--) 
        { 
            let randomnumber=Math.floor(Math.random() * (i + 1));
            array [i], array[randomnumber] = array[randomnumber], array[i];
        }
    }







module.exports = router;