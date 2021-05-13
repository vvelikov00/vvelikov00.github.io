
/*jslint browser:true */
/*global $, jQuery, alert*/
function mobileNav() {
  'use strict';
  var x, y;
  x = document.getElementById("myLinks");
  y = document.getElementById("currentpage");

  if (x.style.display === "block") {
      x.style.display = "none";
  } else {

      x.style.display = "block";

  }

  if (y.style.display === "none") {
      y.style.display = "block";
  } else {

      y.style.display = "none";

  }
}


function mobnavbar() {
  'use strict';
  var x;
  x = window.outerWidth;
  if (x > 800) {
      document.getElementById("myLinks").style.display = "block";
  } else if (x <= 800) {
      document.getElementById("myLinks").style.display = "none";
  }
}


function showonly(elem) {
  'use strict';
  var id = $(elem).attr("id");
  $('.route').hide();
  if (id === 'all') {
      $('.route').show();
  } else {
      $('[data-id=' + id + ']').show();
  }
}

var mybutton = document.getElementById("topBtn");

function scrollFunction() {
  'use strict';
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}


function topFunction() {
  'use strict';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickybar() {
  'use strict';
  if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}

window.onresize = function () {'use strict'; mobnavbar(); };
window.onscroll = function () {'use strict'; scrollFunction(); stickybar(); };