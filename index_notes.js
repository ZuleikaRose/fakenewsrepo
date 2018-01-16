// Example 1: node index.js
console.log("Javascript is awesome!");
var express = require ("express");
var path = require("path");
var app = express();
var request = require("request"); //website we want to scrape
var cheerio = require("cheerio"); //take the returned body loadinto Cheerio then return to user. Only static websites with minimun dom manipulation works
var fs = require("fs");
var app = express();
var port = 8000;



var destination = fs.createWriteStream("/run/media/zuleikarose/Alice My Book/MOOC/techhire/public/scripts/data.html");//path to save scraped file
var url = "http://google.com";
request(url, function(err, resp, body){
    if(err) {
        console.log(err);
    } else {
       // console.log(body[$("")]);
    }
}); 

/*
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>

$('.apple', '#fruits').text()
//=> Apple

$('ul .pear').attr('class')
//=> pear

$('li[class=orange]').html()
//=> <li class = "orange">Orange</li>

Traversing
find(selector)

Get a set of descendants filtered by selector of each element in the current set of matched elements.

$('#fruits').find('li').length
//=> 3

.parent()

Gets the parent of the first selected element.

$('.pear').parent().attr('id')
//=> fruits

.next()

Gets the next sibling of the first selected element.

$('.apple').next().hasClass('orange')
//=> true

.prev()

Gets the previous sibling of the first selected element.

$('.orange').prev().hasClass('apple')
//=> true

.siblings()

Gets the first selected element’s siblings, excluding itself.

$('.pear').siblings().length
//=> 2

.children( selector )

Gets the children of the first selected element.

$('#fruits').children().length
//=> 3

$('#fruits').children('.pear').text()
//=> Pear

*/

/* Example 2: node index.js
console.log("Javascript is awesome!");
var express = require ("express");
var path = require("path");
var app = express();
var request = require("request"); //website we want to scrape
var cheerio = require("cheerio"); //take the returned body loadinto Cheerio then return to user.
var fs = require("fs");
var app = express();
var port = 8000;

var destination = fs.createWriteStream("/run/media/zuleikarose/Alice My Book/MOOC/techhire/public/scripts/data2.html");//path to save scraped file
var url = "http://google.com";
request(url)
.pipe(destination) //pipefunction
.on("finish", function(){
    console.log("done");
})
.on("error", function(err) {
    console.log(err);
});
app.listen(port);
console.log("server is listening on " + port); */


/*// Example 3: node index.js
var express = require("express");
var path = require("path");
var app = express();
var request = require("request");
var fs = require("fs");
var port = 8080;

app.set("view engine", "handlebars");
app.set("views"), path.join(__dirname, "views"));

var url="http://shockwavelabs.net";
request(url, function(err, resp, body) {
    if (err) {
        console.log("error" + err);
    } else {
        console.log(body);
    }
    });
    //end*/

    //3a ignored
/* //Example 3a: define file destination
var destination = fs.createWriteStream("/run/media/zuleikarose/Alice My Book/MOOC/techhire/public/scripts/data3.html");
request(url).pipe(destination);
//Example 3b:
var destination = fs.createWriteStream("/run/media/zuleikarose/Alice My Book/MOOC/techhire/public/scripts/data4.html");
request(url)
.pipe(destination)
.on("finish"), function() {
    console.log("all done");
});
// ??alt to chaining
destination.on("finish", function() {
    console.log("all done");
})
.on("error", function(err) {
    console.log(err);
});

app.listen(port);
console.log("server running on " + port); */

/* // Example 4: node index.js
var express = require("express");
var path = require("path");
var app = express();
var request = require("request");
var fs = require("fs");
var port = 8080;


app.listen(port);

/*
https://github.com/cheeriojs/cheerio

used this indeed listing to inspect the elements:
https://www.indeed.com/prime/roles/tech/software_engineer/los-angeles-ca
We will scrape:
title company name and location job summary 

*/ */