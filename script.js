
window.onload = function () {

  let popup = document.getElementById("popup");
  
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
        // document.getElementById("main_header").style.display = "none";
        document.getElementById("mini_header").style.display = "block";
    } else  {
        // document.getElementById("main_header").style.display  = "";
        document.getElementById("mini_header").style.display = "";  
    }
}

// =================++++++  Ad  ++++++======================

$(document).ready(function(){
  //Check for local storage;
  //If it exisits, set variable and hide form
   let storedPampering = localStorage.getItem('pamper'); 
   if(storedPampering != null){
        $('#SpecialOffer').removeClass('unsubmitted');
        $('.detail').css('display', 'none');
   }
   //If form unsubmitted, do card flip
   if($('#specialOffer').hasClass('unsubmitted')){


    $('.cardGroup.flip').hover(
        function () {
          $(this).find('.card').addClass('theFlip');
        },
        function () {
          $(this).find('.card').removeClass('theFlip');     
        }
      );
    }

// Draw Initial Canvas
if(storedPampering == null){

  $('#myCanvas').drawText({
    layer: true,
    fillStyle: '#9ef8ff',
    font: 'bold 32pt Tangerine', 
    text: 'Get Special Offer Here',
    x: 100, y: 100,
    name: 'startLayer',
    maxWidth: 200
  });
} else{
  let theText;
  let theImage;
  if(storedPampering == 'tan'){
    theImage = 'images/tanning_bed.jpeg';
  } else {
    theImage = 'images/monkeys.jpeg';
  }

  $('#myCanvas').addLayer({
    type: 'image',
    source: theImage,
    x:100, y:100,
    load:function(){
      $(this).drawLayer(1);
      $(this).drawLayer(2);
    }
  });

  $('#myCanvas').addLayer({
     type: 'text',
     fillStyle: '#fff',
     font: 'bold 32pt Tangerine',
     x:101, y:101,
     maxWidth: 200
  });
  $('#myCanvas').addLayer({
     type: 'text',
     fillStyle: '#36c',
     font: 'bold 32pt Tangerine',
     x:100, y:100,
     maxWidth: 200
  });
  $('#myCanvas').drawLayer();
}
  // form submit buttons
  $('#theButton').click(function(){
    let theAge2 = $('#age2').val();
    let thePampering = $('input:radio[name = pamper]:checked').val();
    localStorage.setItem('age2', theAge2);
    localStorage.setItem('pamper', thePampering);
    window.location.href = 'offer.html';
  })

  //Get items from local storage
  // let storedAge2 = localStorage.getItem('age2');
  // let storedPampering = localStorage.getItem('pamper');
   let theAction;
   let theImage;
   let theImageAlt;
   let theDiscount = '25% Off'
   if (storedPampering == 'bath'){
       theImage = 'images/monkeys.jpeg';
       theImageAlt = 'Monkeys bathing';
   } else {
    theImage = 'images/tanning_bed.jpeg';
    theImageAlt = 'person in tanning bed'
   }

   $('#offerImage img').attr({
      src: theImage,
      alt: theImageAlt
   });


});






















