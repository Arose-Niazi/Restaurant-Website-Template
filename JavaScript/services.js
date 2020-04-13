function cr1fun() {
    document.getElementById("des").innerHTML = "Fuad Mufti: 2" + "<br />" + "Arose Niazi: 1";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step1.jpg')";
}
function cr2fun() {
    document.getElementById("des").innerHTML = " Registerations: 0";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url('../citsWebsite/Images/step2.jpg')";

}
function cr3fun() {
    document.getElementById("des").innerHTML = " Registerations: 2";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url('../citsWebsite/Images/step3.jpg')";

}
function cr4fun() {
    document.getElementById("des").innerHTML = "Registerations: 1";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step4.jpg')";

}
function cr5fun() {
    document.getElementById("des").innerHTML = "Registerations: 0";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step5.jpg')";

}
function cr6fun() {
    document.getElementById("des").innerHTML = "Registerations: 0";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step6.jpg')";

}
function cr7fun() {
    document.getElementById("des").innerHTML = "Registerations: 0";
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step7.jpg')";

}
function cr8fun() {
    document.getElementById("des").innerHTML = "Registerations: 0"
    document.getElementById("circle").style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ),url('../citsWebsite/Images/step8.jpg')";

    document.getElementById("des").style.padding = "10px";
}
$('.cr-1').click(function(){
    $('.myDiv.active').removeClass('active').addClass('not-active');
    $(this).removeClass('not-active').addClass('active'); 
})