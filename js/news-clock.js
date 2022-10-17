(function(){

const clockContainer = document.querySelector(".news__clock_container");
 
   function updateClock(){
   
   clockContainer.innerText = new Date().toLocaleTimeString();
   }
 
   setInterval(updateClock, 1000);
 
 })();