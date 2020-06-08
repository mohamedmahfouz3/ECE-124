var x=1;
function vary()
{
    setInterval(ronaldino,1000);    
}
function ronaldino()
{
  var move;
  if(x==1)
  {
    ="pic06.png"
  }
  else if (x==2)
  {
    move="2.jpg"
  }
  else if (x==3)
  {
    move="3.jpg"
  }
  else if(x==4)
  {
    move="4.jpeg"
  }
   else if(x==5	)
  {
    move="5.jpg"
  }
   else if(x==6)
  {
    move="6.jpg"
  }
  else
  {
    x=1;
  }
  document.getElementById("load").src=""+move;
  x++;
  
}
