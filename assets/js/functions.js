

function changeBackground (event){
    event.preventDefault();
    $('.fullscreen-bg').empty();
    $('.fullscreen-bg').css("background-image", "url('assets/images/main-background.jpg')");
    resizeBackground();
}

function resizeBackground (){
     if ($(window).width() > 768){
    $('.fullscreen-bg').css("background-size", "contain");
  } else {
     $('.fullscreen-bg').css("background-size", "cover");
  }
}

function emptyAvatar() {
    $('#second-gallary').empty();
    $('#second-gallary').css("margin-top","30px");
}

function changeAvartar(){
    var pathName = "assets/images/" + $(this).text() + ".png";
	var image = $("<img>").attr("src", pathName).attr("class", "avatar");
	$("#second-gallary").append(image);
}

function changeP1Text (){
     $( "#content-p1" ).empty();
    var person= $(this).text()+"1";
    $( "#content-p1" ).append(window[person]);
}

function changeP2Text (){
     $( "#content-p2" ).empty();
    var person= $(this).text()+"2";
    $( "#content-p2" ).append(window[person]);
}


function displayMobileNav(){
   $('.horizontal-nav').toggleClass("openNav");
   if ( $('.horizontal-nav').hasClass("openNav")){
       $('.horizontal-nav').fadeIn(1000);
       $('.horizontal-nav').css("background-color","rgba(255,228,181, 0.9)");
   } else {
       $('.horizontal-nav').fadeOut(700);
   }
}

function toggleImgClass(){
    $('.nav-mobile-toggle > img').toggleClass("hamburger");
}
  
function displayInnerNav (){
     $(this).toggleClass("openInnerNav");
     //$('.openInnerNav').removeClass("openInnerNav");
    $(this).children().toggleClass("open");
   if ( $('.characters').hasClass("open")){
       $('.open').show();
   } else {
       $('.characters').hide();
   }  
}  



$( window ).resize(resizeBackground);
$('.nav-mobile-toggle').click(displayMobileNav);
$('.nav-mobile-toggle').click(toggleImgClass);

$('.horizontal-nav-li').click(displayInnerNav);

$('.dropdown-li').click(changeBackground);
$('.dropdown-li').click(emptyAvatar);
$('.dropdown-li').click(changeAvartar);
$('.dropdown-li').click(changeP1Text);
$('.dropdown-li').click(changeP2Text);

