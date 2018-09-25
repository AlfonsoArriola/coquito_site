
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



 function myFunction(){
 let x;
  x = document.getElementById('age').value;

if ( x < 21 && x > 0){
	window.alert('You submitted the age of ' + x +'.  Please come back when you are of legal drinking age.');
	text = 'Farewell';
}else if (x >= 21 && x <= 123){
	window.alert('Welcome in!');
	window.location.href = "main.html";
}else if (x > 123){
    window.alert('The oldest recorded human was Jeanne Calmet, who died at the age 122, on the year of 1997.  You are most likely NOT older than Jeanne.');
    text = 'Good Bye';
}else {
	window.alert('Plese enter a human age.');
	text = 'Invalid Input';
}

    document.getElementById("greeting_text").innerHTML = text;
};
