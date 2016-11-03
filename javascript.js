var workingMem = [];
var currentEnt = [];
var merge = [];
var sum = 0;
var calcFin = false;
var currentBlockCount = 0;

//Mathematical Operations
function add() {
  workingMem.push("+");
  currentEnt = [];
  $("#workingDisplay").text(workingMem.join(""));
}

function subtract() {
  workingMem.push("-");
  currentEnt = [];
  $("#workingDisplay").text(workingMem.join(""));
}

function multiply() {
  workingMem.push("*");
  currentEnt = [];
  $("#workingDisplay").text(workingMem.join(""));
}

function divide() {
  workingMem.push("/");
  currentEnt = [];
  $("#workingDisplay").text(workingMem.join(""));
}

function calc() {
  calcFin = true;

  if (workingMem.length == 0) {
    return;
  }

  var ans = "";
  var ans2 = "";
  merge = [].concat.apply([], workingMem);
  merge = [].concat.apply([], workingMem);

  for (i = 0; i < merge.length; i++) {
    ans = ans + merge[i];
  }
  //Handler for when operator is the last character EX: 1+1+
  if (ans.charAt(ans.length - 1) == "+" || ans.charAt(ans.length - 1) == "-" || ans.charAt(ans.length - 1) == "*" || ans.charAt(ans.length - 1) == "/") {
    ans2 = ans.slice(0, ans.length - 1);
    ans = ans2;
  }

  sum = eval(ans);

  $("#currentDisplay").text(sum);
  $("#workingDisplay").text(workingMem.join("") + "=" + sum);

  workingMem = [sum];
  sum = 0;

  currentEnt = [];
}

//Operator Buttons

$("#add").click(function() {
  currentBlockCount = 0;
  calcFin = false;
  add();
});

$("#subtract").click(function() {
  currentBlockCount = 0;

  calcFin = false;
  subtract();
});

$("#multiply").click(function() {
  currentBlockCount = 0;

  calcFin = false;
  multiply();
});

$("#divide").click(function() {
  currentBlockCount = 0;

  calcFin = false;
  divide();
});

//Number Buttons

$("#1").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(1);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(1);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#2").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(2);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(2);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#3").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(3);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(3);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#4").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(4);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(4);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#5").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(5);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(5);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#6").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(6);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(6);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#7").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(7);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(7);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#8").click(function() {
  currentBlockCount += 1;
  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(8);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(8);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#9").click(function() {
  currentBlockCount += 1;
  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(9);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(9);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#0").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(0);
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(0);
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#decimal").click(function() {
  currentBlockCount += 1;

  if (calcFin == true) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text(0);

  }
  currentEnt.push(".");
  $("#currentDisplay").text(currentEnt.join(""));
  workingMem.push(".");
  $("#workingDisplay").text(workingMem.join(""));
  calcFin = false;

});

$("#CE").click(function() {
  if (currentBlockCount > 0) {
    for (i = 1; i <= currentBlockCount; i++) {
      workingMem.pop();
    }
  }
  $("#workingDisplay").text(workingMem.join(""));

  currentEnt = [];
  $("#currentDisplay").text(0);
  currentBlockCount = 0;

});

$("#AC").click(function() {
  workingMem = [];
  $("#workingDisplay").text(workingMem);
  currentEnt = [];
  $("#currentDisplay").text(0);

});

$("#equal").click(function() {
  calc();
});

//Digit Input Limit

$("button").click(function() {
  if (currentBlockCount > 14) {
    workingMem = [];
    $("#workingDisplay").text(0);
    currentEnt = [];
    $("#currentDisplay").text("Digit Limit Met");
    currentBlockCount = 0;
  }
});
