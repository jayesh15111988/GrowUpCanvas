/**
 * Created by jayeshkawli on 9/4/14.
 */

	
var gameLevelNumber=-1;
		var isgameEnd=false;
		var gameStarted=0;
var isFirst=true;
		var intervalGame;
		function enable(e){
	 var canvasOffset=$("#mycan").offset();
        var offsetX=canvasOffset.left;
        var offsetY=canvasOffset.top;
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
		var can = document.getElementById("mycan");
	 if (mx >= can.width/2 && mx <= (200 + can.width / 2) && my >= can.height/3 && my <= (100 + can.height / 3)){
	if(gameStarted==1){
		return 1;
	}
	
	start = new Date().getTime();
if(gameStarted==0)
	{
	var gameLevel=prompt("Please enter Level Number (1-10)","1");
}
if (gameLevel!=null && gameLevel>=1 && gameLevel<=10){
gameLevelNumber=gameLevel;
}
	if(gameStarted==0)
	{
		gameStarted=1;
	moveBalls();
	}

	
	}
	
	 if (mx > (can.width/2)+100 && mx <= (can.width/2)+200 && my >= 0 && my <= (50)){
	moveBalls();
	}
	
	 if (mx >= can.width/2 && mx <= (can.width/2)+100 && my >= 0 && my <= 50){
	
	
	
	//alert(mx);
	//alert(my);
	//clearInterval(intervalGame);
	if(typeof intervalGame !="undefined") clearInterval(intervalGame);
	
	var canvasContext = can.getContext("2d");
	
	 canvasContext.fillStyle = "rgba(0,255,255,0.5)";
     canvasContext.fillRect((can.width/2)+100, 0, 100, 50);
     canvasContext.fillStyle = "rgba(222,21,25,1)";
     canvasContext.fillText("click to restart", (can.width/2)+125,25);
	}
	
	}
	function disable(){
	}
		
	this.addEventListener('mouseup', enable); 
     this.addEventListener('mousedown', disable); 

	 
	$(document).ready(function()
		{
		//alert("sdf");
		var can = document.getElementById("mycan");
		if (can.width < window.innerWidth) {can.width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
				}
				if (can.height < window.innerHeight) {
					can.height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;

				}
		
		var con = can.getContext("2d");
		
		con.fillStyle = "rgba(0,0,45,1)";
            con.fillRect(0, 0, can.width, can.height);
            con.strokeStyle = "rgba(23,34,33,1)";
            con.strokeRect(can.width/2, can.height/3, 200, 100);


            con.fillStyle = "rgba(255,0,0,1)";

            con.fillText("Click to start the Game. Go and eat small", (can.width/2)+5, ((can.height/3)+50));
		con.fillText("particles and stay away from large ones.", (can.width/2)+10, ((can.height/3)+60));
		
		})
		
	function mouse_monitor(e){
   if(!isgameEnd){
       var canvasOffset=$("#mycan").offset();
        var offsetX=canvasOffset.left;
        var offsetY=canvasOffset.top;
        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;
      }
    }	
		
var moveBalls=function() {
		
		var can = document.getElementById("mycan");
				if (can.width < window.innerWidth) {can.width = window.innerWidth;
				}
				if (can.height < window.innerHeight) {
					can.height = window.innerHeight;
				}
var radiusSmall=15*(gameLevelNumber/3);	
     points=0;
    
   
   
  
     
    
    
				var canvasContext = can.getContext("2d");
			
    //var mx=150,my=150;
				var x=100,y=100;
this.addEventListener('mousemove', mouse_monitor); 	
    
    function draw()
				{
 
                
                    if(particle.length<10){
                    particle.push(new ranpoint());
                    }
                    canvasContext.globalCompositeOperation="source-over";
                   
                   
				canvasContext.fillStyle="rgba(0,0,0,1)";
				canvasContext.fillRect(0,0,can.width,can.height);
                //    canvasContext.fillStyle="rgba(0,234,0,1)";
				// canvasContext.fillText("Score is!"+points, 100, 400);

 				canvasContext.fillStyle = "rgba(255,25,25,0.5)";
                canvasContext.fillRect(can.width/2, 0, 100, 50);
                canvasContext.fillStyle = "rgba(123,119,198,1)";
                canvasContext.fillText("click to close", (can.width/2)+20, 25);
				
canvasContext.globalCompositeOperation="lighter";
	canvasContext.fillStyle="rgba(233,23,24,1)";
                    canvasContext.arc(mx,my,radiusSmall,0,2*Math.PI,false);
                    canvasContext.closePath();
				canvasContext.fill();			

                     for(var j=0;j<particle.length;j++)
{
     document.getElementById("dist2").innerHTML=j;
var par1=particle[j];  
    
    var centerDistance=Math.sqrt(Math.pow((par1.x-mx),2)+Math.pow((par1.y-my),2));
    
    if(centerDistance<=par1.radius+radiusSmall){
        if(par1.radius>radiusSmall){
    canvasContext.fillStyle = "rgba(0,23,34,0.5)";

                    canvasContext.fillRect(0, 0, can.width, can.height);

                    canvasContext.strokeStyle = "rgba(23,134,133,1)";
                    canvasContext.strokeRect(can.width/2, can.height/3, 200, 100);


                    canvasContext.fillStyle = "rgba(255,0,0,1)";
            
			
			
            //canvasContext.strokeRect(10, 10, 180, 80);
		//	alert("asd");
         //      isgameEnd=true;
			//   particle.splice(0,particle.length);
			   var end = new Date().getTime();
			   var totalTime=(end-start)/1000;
 canvasContext.fillText("Game Over Score is!" + points , (can.width/2)+10, (can.height/3)+20);
                    canvasContext.fillText("Click to restart", (can.width/2)+10, (can.height/3)+40);
                    canvasContext.fillText("Maximum time played" + totalTime + " Seconds", (can.width/2)+10, (can.height/3)+60);
gameStarted=0;
//canvasContext.fillText("Game Over Score is!"+points+"Click to restart", 350, 350);			
//canvasContext.fillText("Maximum time played"+totalTime+" Seconds",350,400);	
	//alert((end-start)/1000);
			   clearInterval(intervalGame);
			   
        }
        else{
          radiusSmall+=par1.radius/50; 
        points++;
           
            particle.splice(j, 1);
            
  // particle.push(new ranpoint());
         //   radiusSmall+=0.02;
        }
       
        document.getElementById("dist2").innerHTML=points;//par1.radius+radiusSmall;  
    }
	
	
}	
                    
                    
    


               for (var i = 0; i < particle.length; i++) {

                var part = particle[i];

                canvasContext.beginPath();
                canvasContext.fillStyle = part.color;
                canvasContext.arc(part.x, part.y, part.radius, 0, 2 * Math.PI, false); //Anticlockwise fill colors
                canvasContext.closePath();
                canvasContext.fill();

                //vx and vy are velocities in x and y direction respectively
                part.x += part.vx;
                part.y += part.vy;

                //Extreme left or Extreme right
                if ((part.x <= 0) || (part.x >= can.width)) {
                    part.x = Math.random() * can.width;
                }

                //Extreme top or Extreme Bottom
                else if ((part.y <= 0) || (part.y >= can.height)) {
                    part.y = Math.random() * can.height;
                }
            }

               
}
function ranpoint()
{

	this.x=Math.random()*100;
	this.y=Math.random()*100;
	if(gameLevelNumber==-1){
	gameLevelNumber=1;
	}
	else
	{
		if(gameLevelNumber>5)
			gameLevelNumber*=1.0005;
		else
	gameLevelNumber*=0.85;
	}
this.vx=((Math.random()*15)-Math.random()*10)*gameLevelNumber;
this.vy=((Math.random()*5)-Math.random()*10)*gameLevelNumber;

var r=Math.random()*256>>0;
var g=Math.random()*256>>0;
var b=Math.random()*256>>0;

this.color="rgba("+r+","+g+","+b+",0.5)";

this.radius=Math.random()*20*(gameLevelNumber+0.5);

}

var particle=[];
for(var i=0;i<20;i++)
{
	
	particle.push(new ranpoint());
	
}

intervalGame=	setInterval(draw,33);

}

		


		
		