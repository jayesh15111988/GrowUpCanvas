function initializeAllVariables()
{
	//Initialize all variables once current game is over

    totalPoints = 0;
    pointsRequired=10;
    maximumBallRadius=10;
    stageNumber=1;
    particleNumbers=10;
    points=0;

}

function updateGameParametersForNextStage(){
	 pointsRequired+=pointsRequiredToGoToNextStepIncrement;
    maximumBallRadius+=maximumBallRadiusIncrement;
    particleNumbers+=particleNumbersIncrement;
    stageNumber+=1;
    points=0;
}

function incrementPointsAfterParticleConsumption(collidingParticleRadius){
	points+=(collidingParticleRadius/radiusToPointsConversionDivisionFactor);
          points = Number((points).toFixed(decimalPointsToRoundTo));
          radiusSmall+=(points/pointsToRadiusConversionFactor); 
}

function getNewColorWithRandomRGBValues() {

        var r = Math.random() * 255 >> 0;
        var g = Math.random() * 255 >> 0;
        var b = Math.random() * 255 >> 0;
        return "rgba(" + r + "," + g + "," + b + ","+movingBallsOpaciity+")";

    }


    function fillColorWithDefaultLightGreen() {
    canvasContext.fillStyle = "rgba(255,255,255,1.0)";
    canvasContext.fillRect(0, 0, can.width, can.height);
    canvasContext.fillStyle = "rgba(120,190,125,0.5)";
    canvasContext.fillRect(0, 0, can.width, can.height);

}

