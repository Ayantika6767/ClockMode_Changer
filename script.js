const bt = document.getElementById('color') ; 
bt.addEventListener('click' , (e) => { 
     if ( bt.innerHTML=='DAY'){ 
        document.body.style.backgroundColor ='black' ;
       
        bt.innerHTML = 'NIGHT' ;
        document.getElementById('color').style.color = 'black';
        document.getElementById('color').style.backgroundColor = 'white';
       //document.getElementById('imgwhite').src="https://wallpaperaccess.com/full/1836085.jpg";


       document.getElementById('hours').style.color = 'white';
       document.getElementById('minutes').style.color = 'white';
       document.getElementById('seconds').style.color = 'white';
       document.getElementById('session').style.color = 'white';

     }
    else{ 
        document.body.style.backgroundColor ='white' ;
       
        bt.innerHTML = 'DAY' ;
        document.getElementById('color').style.color = 'white';
        document.getElementById('color').style.backgroundColor = 'black';
       //document.getElementById('imgblack').src="https://www.teahub.io/photos/full/227-2276418_clock-wallpaper-black-and-white.jpg";


        document.getElementById('hours').style.color = 'black';
       document.getElementById('minutes').style.color = 'black';
       document.getElementById('seconds').style.color = 'black';
       document.getElementById('session').style.color = 'black';
     }
});


function displayTime()
{
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var mins = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  }
  else {
    session.innerHTML = "AM";
  }
  if (hrs > 12)
  {
    hrs = hrs - 12;
  }
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = seconds;

    

}
setInterval(displayTime, 1000);


