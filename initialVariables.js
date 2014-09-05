var can = document.getElementById('growUpCanvas');
 var canvasContext = can.getContext('2d');

 //Number of Moving particles visible on the screen
 var particleNumbers = 10;
 var particleNumbersIncrement=10;
 //Stage number - Presumably same as level number but refers to next level user is going to
 var stageNumber = 1;
 var ballsVelocityFactorIncrementParameter=0.2;
 var movingBallsOpaciity=0.8;
 var frameRate=33;
 var maximumBallRadius=5;
var maximumBallRadiusIncrement=10;

 var decimalPointsToRoundTo=2;
 var points = 0;
 //Minimum points required to move to the next level
 var pointsRequired = 3;
 var pointsRequiredToGoToNextStepIncrement=3;
 var summaryHolderForGameDuration=[];