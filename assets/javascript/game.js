var words = ["ronaldo",  "messi", "naymar" ];
let rightGuess = [];
let wrongGuess = [];
var underscores = [];
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];
console.log(chosenWord);
 

    for(var i = 0; i < chosenWord.length; i++){
        underscores.push("_");
    }
    
console.log(underscores);

document.addEventListener("keypress", function( event ) { 
let chosenLetter = String.fromCharCode(event.keycode);

if(chosenWord.indexOf(chosenLetter) > -1){
    rightGuess.push(chosenLetter);
    console.log(rightGuess);
}
else{
    wrongGuess.push(chosenLetter);
}
});
/*create array of words 
choose random word 
create underscore based on length of word 



*/

