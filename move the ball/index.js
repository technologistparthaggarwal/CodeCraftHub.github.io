var ball = document.getElementById("ball");
var box = document.getElementById("box");


var tmp = 212;
var d_count = 0;

var tmp_1 = 102;

//when perticular key is pressed then it is printed in console
onkeydown = function key(Event){

    var key = Event.key;
   

    //for moving the bar left
    var left = tmp 
    var top = tmp_1

    if(key =="d")
    { 
        tmp = left + 100 
        console.log(tmp)
      
        if (tmp >=1000)
        {
           tmp=1080
           ball.style.left="1080px"
          
        }
        ball.style.left = tmp +"px"
    
  }

  //for moving the bar right
  if(key =="a")
  {
    tmp = left - 100

    if(tmp<=212)
    {
      tmp = 212
      ball.style.left = "212"+ "px"
    }

    ball.style.left = tmp +"px"

  }
  if(key == "s")
  {
    tmp_1 = top + 100;
    ball.style.top = tmp_1+"px";
    
    if(tmp_1 <= 83)
    {
      tmp_1 = 83;
      ball.style.top = "102" + "px"; 
    }
    if(tmp_1 >= 528)
    {
      tmp_1 = 528;
      ball.style.top = "528" + "px"; 
    }

  }

  if(key == "w"){
    tmp_1 = top - 100
    ball.style.top = tmp_1+"px";

    if(tmp_1 <= 83)
    {
      tmp_1 = 83;
      ball.style.top = "102" + "px"; 
    }
    if(tmp_1 >= 528)
    {
      tmp_1 = 528;
      ball.style.top = "528" + "px"; 
    }



}

}
//for moving the randomly
