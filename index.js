/*$(function () {
  var scroll = new SmoothScroll('a[href*="#section-"]');
});*/


//phantomjs index.js
//phantomjs.org sample script:
page.open(address, function (status) {
  if (status !== 'success') {
      console.log('Unable to load the address!');
      phantom.exit();
  } else {
      window.setTimeout(function () {
          page.render(output);
          phantom.exit();
      }, 1000); // Change timeout as required to allow sufficient time 
  }
});

console.log("JavaScript is awesome!");
var page = require('webpage').create();
page.open('http://www.google.com', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
