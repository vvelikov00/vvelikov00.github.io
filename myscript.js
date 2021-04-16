
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


function navbar() {
   var x = window.outerWidth;
   var y = window.outerHeight;
  if ( x > 800 && y > 600) {
    document.getElementById("myLinks").style.display = "block";
  }  
  else if( x <= 800 && y > 600)
  {
   document.getElementById("myLinks").style.display = "block";
  }
  else if( x > 800 && y <= 600)
  {
   document.getElementById("myLinks").style.display = "block";
  }
  else if( x <= 800 && y <= 600)
  {
   document.getElementById("myLinks").style.display = "none";
  }
}


		window.onscroll = function() {StickyNav(), scrollFunction()};

var sidebar = document.getElementById("sidebar");
var sticky = sidebar.offsetTop;

function StickyNav() {
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky")
  } else {
    sidebar.classList.remove("sticky");
  }
}


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

function showonly(elem) {
  var id = $(elem).attr("id");
  if (id == 'apple'){
    $('.items div').hide();
    $("[data-id='ap']").show();
  }
  else if(id == 'xiaomi'){
    $('.items div').hide();
  $("[data-id='mi']").show();
  }
  else if(id == 'all'){
    $('.items div').show();
  }
}



function footer(){
      var x = document.getElementsByClassName("root").length;
      var y = Math.round(x/2); 
      var z = window.outerWidth;
      var a = document.getElementsByClassName("footer");
      if(z>1020){
        if(x>2){
      var newHeight = y*($('.root').height()+40);
      $('.items').height(newHeight);
        }
        else{
          var newHeight = y*($('.root').height()+40);
      $('.items').height(newHeight);
         $('.sidebar').css({height:640});
        }
      }
      else{
        var newHeight = x*($('.root').height()+40);
      $('.items').height(newHeight);
      }
  }

$( window ).on("load", footer);
$( window ).on("resize", footer);


$(document).ready(function(){
  $('#a1').click(function(){
   $('#home').load('facebook.com');
  });
});