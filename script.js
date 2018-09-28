
window.onload = function () {
  /* Cache the popup. */
  var popup = document.getElementById("popup");
  
  /* Show the popup. */
  popup.classList.remove("hidden");
  
  /* Fade the popup in */
  setTimeout(()=>popup.classList.add("fade-in"));


  // /* Close the popup when a age is selected. */
  // document.getElementById("age").onchange = function () {


  //     Fade the popup out 
  //    popup.classList.remove("fade-in");
     
  //    /* Hide the popup. */
  //    setTimeout(()=>popup.classList.add("hidden"), 300);
  // };
};

// ------------------------------------------------------------------

 function myFunction(){
 let x;
  x = document.getElementById('age').value;

if ( x < 21 && x > 0){
	text = 'You submitted the age of ' + x +'.  Please come back when you are of legal drinking age.';
}else if (x >= 21 && x <= 123){
	text = 'Welcome in!';
	window.location.href = "main.html";
}else if (x > 123){
    text = 'The oldest recorded human was Jeanne Calmet, who died at the age 122, on the year of 1997.  You are most likely NOT older than Jeanne.';
}else {
	text = 'Invalid Input';
}
    popup.classList.remove("fade-in");
    document.getElementById("greeting_text").innerHTML = text;
};

// +++++++++++++++++++++++++++++++++++++++

window.onscroll = function() {slimScrollGo()};

function slimScrollGo() {
    if (document.body.scrollTop > 288 || document.documentElement.scrollTop > 288 ){
        document.getElementById("main_header").style.display = "none";
        document.getElementById("mini_header").style.display = "block";
    } else  {
        document.getElementById("main_header").style.display  = "";
        document.getElementById("mini_header").style.display = "";  
    }
}
