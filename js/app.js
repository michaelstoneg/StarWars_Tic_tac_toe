console.log("It's Aliiiive!!!")

var gridSquares = document.getElementById("boardFrame").children;
var playerArray = ['Empire', 'Rebels'];
var player;

var resetButton = document.getElementById("resetButton");
var outputBox = document.getElementById("outputBox");


// var rebelWinsCount = document.getElementById("rebelWins");
// var imperialWinsCount = document.getElementById("imperialWins");
// var rebelWinCntr = [];
//     rebelWinsCount.textContent = rebelWinCntr;
// var imperialWinCntr =[];
//     imperialWinsCount.innerHTML = imperialWinCntr;

var battleLog = [];
var clickedCoords = '';
var rebelBattleLog =[];
var imperialBattleLog =[];

var tieWarp = document.getElementById("tiewarp");
var xWarp = document.getElementById("xwarp");
var tieFire = document.getElementById("tiefire");
var droid = document.getElementById("droid");

var matches = 0;

    var firstRowWin = ['1', '2', '3'];
    var secondRowWin = ['4', '5', '6'];
    var lastRowWin = ['7', '8', '9'];

    var firstColumnWin = ['1', '4', '7'];
    var secondColumnWin = ['2', '5', '8'];
    var lastColumnWin = ['3', '6', '9'];

    var firstDiagWin = ['1', '5', '9'];
    var secondDiagWin = ['7', '5', '3'];
    var paddingArray = [];

var winCollection = [firstRowWin, secondRowWin, lastRowWin, firstColumnWin, secondColumnWin, lastColumnWin, firstDiagWin, secondDiagWin, paddingArray];


resetButton.addEventListener("click", resetFunc);

outputBox.innerHTML = "Game Initialized!";

for (var i = 0; i < gridSquares.length; i++) {

  gridSquares[i].addEventListener("click", clickHandle);
}

player = playerArray[Math.floor(Math.random() * playerArray.length)];

if (player == 'Empire') {
  outputBox.innerHTML = player + "   launches the 1st attack";
}
else {
  outputBox.innerHTML = player + "   launch the 1st attack";
}

function clickHandle () {

  clickedCoords = this.getAttribute('data-value');

  if (player == 'Rebels') {
    var timedThis = this;
    if (this.innerHTML == undefined || this.innerHTML == '') {
      this.innerHTML = '<img src="imgs/warpjump.gif">';
      xWarp.playbackRate = 2.5;
      xWarp.play();

      setTimeout(function() {
        timedThis.innerHTML = '<img src="imgs/xwing.png">';
      }, 700)

      battleLog.push(clickedCoords);
      rebelBattleLog.push(clickedCoords);
      outputBox.innerHTML ="Rebels have taken sector   " + clickedCoords + "!    Empire!  Time to strike back!!";

      winCheck();

      player = 'Empire';

    }
    else {
      if (this.innerHTML == '<img src="imgs/xwing.png">') {
        // droid.playbackRate = 1.5;
        droid.play();
        outputBox.innerHTML = "We've got sector   " + clickedCoords + "   locked down Rebel Squad. Give em hell!";
      } else {
        tieFire.playbackRate = 2;
        tieFire.play();
        outputBox.innerHTML = "Sector   " + clickedCoords + "   is too hot Rebel Squad. Retreat!";
      }
      clickedCoords = '';
    }

  }
  else  if (player == 'Empire') {
    var timedThis = this;
    if (this.innerHTML == undefined || this.innerHTML == '') {
      this.innerHTML = '<img src="imgs/warpjump.gif">';
      tieWarp.playbackRate = 2.7;
      tieWarp.play();
      setTimeout(function() {
        timedThis.innerHTML = '<img src="imgs/tiefighter.png">';
      }, 700)

      battleLog.push(clickedCoords);
      imperialBattleLog.push(clickedCoords);
      outputBox.innerHTML ="The Empire has taken sector   " + clickedCoords + "!   Rebels!  Don't give up!!";

      winCheck();

      player = 'Rebels';
    }
    else {
      if (this.innerHTML == '<img src="imgs/tiefighter.png">') {
        // droid.playbackRate = 1.5;
        droid.play();
        outputBox.innerHTML = "We've got sector   " + clickedCoords + "   locked down Imperial Squad. Advance!";
      } else {
        outputBox.innerHTML = "Sector   " + clickedCoords + "   is too hot  Imperial Squad. Retreat!";
        tieFire.playbackRate = 2;
        tieFire.play();
      }
      clickedCoords = '';
    }
  }

  if (battleLog.length == 9) {
    outputBox.innerHTML = "Opposing forces are evenly matched. War consumes all";

    setTimeout(function() {
      resetFunc();
    }, 3000)
  }

}
function resetFunc () {

    for (var i = 0; i < gridSquares.length; i++) {
      gridSquares[i].innerHTML = '';
    }

    player = playerArray[Math.floor(Math.random() * playerArray.length)];
    outputBox.innerHTML = "The galaxy is at war again. The 1st strike belongs to  " + player;

    clickedCoords ='';
    battleLog = [];
    rebelBattleLog = [];
    imperialBattleLog = [];
    matches = 0;

  }

  function winCheck() {

        if (player == 'Rebels') {
          for (var i = 0; i < winCollection.length; i++) {
            if (matches < 3) {
              matches = 0;}
            if (matches == 3) {
              winDeclare();
            }
            for (var a = 0; a < winCollection[i].length; a ++) {
                if (rebelBattleLog.indexOf(winCollection[i][a]) !== -1 ) {
                  matches = matches + 1 ;
                }
              }
            }
          }

          else {
            for (var i = 0; i < winCollection.length; i++) {
              if (matches < 3) {
                matches = 0;}
              if (matches == 3) {
                winDeclare();
              }
              for (var a = 0; a < winCollection[i].length; a ++) {
                  if (imperialBattleLog.indexOf(winCollection[i][a]) !== -1 ) {
                    matches = matches + 1 ;
                  }
                }
              }
            }
  }

    function winDeclare() {
      if (player == 'Rebels') {
        outputBox.innerHTML = "The galaxy finally has freedom thanks to the  " + player;
        // rebelWinCntr.push('I');
        setTimeout(function() {
          resetFunc();
        }, 3000)

      } else {
        outputBox.innerHTML = "The galaxy finally has order thanks to the  " + player;
        // imperialWinCntr.push('I');
        setTimeout(function() {
          resetFunc();
        }, 3000)
      }
    }
