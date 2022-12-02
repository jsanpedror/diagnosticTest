//document.getElementById("startBtn").addEventListener("click", startTest);
//document.getElementById("firstBtn").addEventListener("click", testOne);
//document.getElementById("secondBtn").addEventListener("click", testTwo);
//document.getElementById("thirdBtn").addEventListener("click", testThree);
//document.getElementById("fourthBtn").addEventListener("click", testFour);




var n_questionsOne = 50;
var n_questionsTwo = 100;
var n_questionsThree = 150;
var n_questionsFour = 200;
var levelOneScore = 0;
var levelTwoScore = 0;
var levelThreeScore = 0;
var levelFourScore = 0;



function startTest() {
  document.getElementById("level1").style.display = "block";
   document.getElementById("headDiv").style.display = "none";
}

function testOne() {
    var scoreOne = 0;
    // The input elements have names q1 ... q6, so we iterate from 1 to 200
    for (var i = 1; i <= n_questionsOne; i++) {
        // Get all input elements with name qX (i.e. q1, q2, ...)
        var answersOne = document.getElementsByName('q' + i);
        // Iterate over the selected input elements. They are the answers
        // for one question
        for (var j = 0; j < answersOne.length; j++) {
            // If one of them is selected
            if (answersOne[j].checked) {
                // add its value to the final score
                scoreOne += +answersOne[j].value;
                // and don't check the other answers of the question
                // (since only one can be selected)
                break;
            }
        }
    }
  levelOneScore = scoreOne;
  
document.getElementById("level1").style.display ="none";
  
  if(scoreOne <= 45) {
    document.getElementById("scoreDiv").style.display ="block";
    document.getElementById("showScore").innerHTML = "Total de aciertos"+" "+levelOneScore + " "+"Nivel 1";
  }else{
    document.getElementById("level2").style.display = "block";
  }
}

//calcular nivel dos
function testTwo() {
    var scoreTwo = 0;
    // The input elements have names q1 ... q6, so we iterate from 1 to 200
    for (var i = 51; i <= n_questionsTwo; i++) {
        // Get all input elements with name qX (i.e. q1, q2, ...)
        var answersTwo = document.getElementsByName('q' + i);
        // Iterate over the selected input elements. They are the answers
        // for one question
        for (var j = 0; j < answersTwo.length; j++) {
            // If one of them is selected
            if (answersTwo[j].checked) {
                // add its value to the final score
                scoreTwo += +answersTwo[j].value;
                // and don't check the other answers of the question
                // (since only one can be selected)
                break;
            }
        }
    }
  
  levelTwoScore = levelOneScore+scoreTwo;
  
document.getElementById("level2").style.display ="none";
  
  if(levelTwoScore <= 90) {
      document.getElementById("scoreDiv").style.display ="block";
    document.getElementById("showScore").innerHTML = "Total de aciertos"+" "+ levelTwoScore+ " "+"Nivel 2";
  }else{
    document.getElementById("level3").style.display = "block";
  }
}

//calcular nivel 3
function testThree() {
    var scoreThree = 0;
    // The input elements have names q1 ... q6, so we iterate from 1 to 200
    for (var i = 101; i <= n_questionsThree; i++) {
        // Get all input elements with name qX (i.e. q1, q2, ...)
        var answersThree = document.getElementsByName('q' + i);
        // Iterate over the selected input elements. They are the answers
        // for one question
        for (var j = 0; j < answersThree.length; j++) {
            // If one of them is selected
            if (answersThree[j].checked) {
                // add its value to the final score
                scoreThree += +answersThree[j].value;
                // and don't check the other answers of the question
                // (since only one can be selected)
                break;
            }
        }
    }
  
  levelThreeScore = levelTwoScore+scoreThree;
  
document.getElementById("level3").style.display ="none";
  
  if(levelThreeScore <= 135) {
    document.getElementById("scoreDiv").style.display ="block";
    document.getElementById("showScore").innerHTML = "Total de aciertos"+" "+levelThreeScore+ " "+"Nivel 3";
  }else{
    document.getElementById("level4").style.display = "block";
  }
}

//calcular nivel 4
function testFour() {
    var scoreFour = 0;
    // The input elements have names q1 ... q6, so we iterate from 1 to 200
    for (var i = 150; i <= n_questionsFour; i++) {
        // Get all input elements with name qX (i.e. q1, q2, ...)
        var answersFour = document.getElementsByName('q' + i);
        // Iterate over the selected input elements. They are the answers
        // for one question
        for (var j = 0; j < answersFour.length; j++) {
            // If one of them is selected
            if (answersFour[j].checked) {
                // add its value to the final score
                scoreFour += +answersFour[j].value;
                // and don't check the other answers of the question
                // (since only one can be selected)
                break;
            }
        }
    }
  
  levelFourScore = levelThreeScore+scoreFour;
  
document.getElementById("level4").style.display ="none";
  
  if(levelFourScore <= 180) {
    document.getElementById("scoreDiv").style.display ="block";
    document.getElementById("showScore").innerHTML = "Aciertos Totales"+" "+levelFourScore +" "+"Nivel 4" 
  }else{
    document.getElementById("scoreDiv").style.display ="block";
    document.getElementById("showScore").innerHTML = "Aciertos Totales"+" "+levelFourScore + " "+"Arriba de nivel 4";
  }
}