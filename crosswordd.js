 function randoletters() {

   var table = document.getElementById("puzzel");
   for (var r = 0; r < table.rows.length; r++){
     for(var c = 0; c < 20; c++){
       var cell = table.rows[r].cells[c];
       if(cell.className === "cross"){
         cell.innerHTML = getRandomLetter()
       }
    }
   }
}
function getRandomLetter(){
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomIndex = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
  console.log(randomIndex);
  return letters[randomIndex];
}

function coffee(){

}
function art(){

}
function novel(){

}
function genre(){

}
function literacy(){

}
function essay(){

}
function philosophy(){

}
function romanticism(){

}
function aesthetics(){

}
function aristotle(){

}

function history(){
 console.log('td clicked')};
