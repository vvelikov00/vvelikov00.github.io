
function mobileNav() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("currentpage");

  if (x.style.display == "block" ) {
    x.style.display = "none";
  } else {

    x.style.display = "block";

  }

  if (y.style.display == "none" ) {
    y.style.display = "block";
  } else {

    y.style.display = "none";

  }
}

window.onresize = function(){mobnavbar(), route()};
function mobnavbar() {
   var x = window.outerWidth;
   var y = window.outerHeight;
  if ( x > 800) {
    document.getElementById("myLinks").style.display = "block";
  }  
 
  else if( x <= 800)
  {
   document.getElementById("myLinks").style.display = "none";
  }
}


function showonly(elem) {
  var id = $(elem).attr("id");
  $('.route').hide();
  if(id == 'all'){
    $('.route').show();
  }
  else{
  $('[data-id=' + id + ']').show();
  }
}







window.onscroll = function() {scrollFunction(), stickybar()};


  var mybutton = document.getElementById("topBtn");



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickybar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else{
    navbar.classList.remove("sticky");
  }
}

