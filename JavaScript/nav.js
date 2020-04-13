

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

var x = document.getElementById("nav");

function my() {
  
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
      x.className += " responsive";
  }
  else {
      x.className = "navbar";
  }
}


function myFunction(x) {
  if (x.matches) { // If media query matches
    window.onscroll = function () { m() };
    function m() {
      console.log("if", window.innerWidth);
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("nav").className = "scroll50";
      } else {
        document.getElementById("nav").className = "navbar";
      }
    }
  }
  else{
    console.log('m hrere');
    window.onscroll = function () {};
    window.onresize = function(){
      document.getElementById('nav').className = "navbar";
      };
    }
   
  }


var width = window.matchMedia("(min-width: 830px)")
myFunction(width) // Call listener function at run time
width.addListener(myFunction);
window.onload = myFunction(width); 
