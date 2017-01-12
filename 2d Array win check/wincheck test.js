var firstRowWin = ['1', '2', '3'];
var secondRowWin = ['4', '5', '6'];
var lastRowWin = ['7', '8', '9'];

var firstColumnWin = ['1', '4', '7'];
var secondColumnWin = ['2', '5', '8'];
var lastColumnWin = ['3', '6', '9'];

var firstDiagWin = ['1', '5', '9'];
var secondDiagWin = ['7', '5', '3'];
var bufferArray = ['1'];

var winCollection = [firstRowWin, secondRowWin, lastRowWin, firstColumnWin, secondColumnWin, lastColumnWin, firstDiagWin, secondDiagWin, bufferArray];


var rebelBattleLog = ['3', '6', '9', ];

var matches = 0;


function winCheck() {

for (var i = 0; i < winCollection.length; i++) {
  // console.log("matches", matches);
  if (matches < 3) {
    matches = 0;}
  console.log("matches", matches);

  if (matches == 3) {
    console.log("gotcha!!!");
    matches = 0;

  }

  console.log(winCollection[i]);

  for (var a = 0; a < winCollection[i].length; a ++) {

      if (rebelBattleLog.indexOf(winCollection[i][a]) !== -1 ) {

        console.log(winCollection[i][a]);

        matches = matches + 1 ;


}
}
}
}
