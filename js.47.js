

var span=document.getElementById("spans");
var icon=document.getElementById("icons");

var auf=false;

function add() {


    if (auf==false) 
    {

        span.style.display="block";
        icon.style.transform="rotate(180deg)";

        
      


        
    }
    else{
        
       span.style.display="none";
       icon.style.transform="rotate(360deg)";
       
        
    }
    auf=!auf;


 
}
