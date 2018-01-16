
console.log("hello");
/* screen capturing with PhantomJS.*/
/*Import the webpage module and set it ot the variable webpage*/
var webpage = require("webpage");

/*Create a instance of the webpage object and set it ot the variable page*/
var page = webpage.create();

page.open("http://google.com", function(status) {
    console.log(page["objectName"]);
    console.log(page["title"]);
    console.log(page["url"]);
    
    console.log("Status: " + status);
    if (status === "success") {
        page.render("screenCapture1.jpeg", {format: "jpeg", quality: "0"});
        page.render("screenCapture2.jpeg", {format: "jpeg", quality: "25"});
        page.render("screenCapture3.jpeg", {format: "jpeg", quality: "50"});
        page.render("screenCapture4.jpeg", {format: "jpeg", quality: "75"});
        page.render("screenCapture5.jpeg", {format: "jpeg", quality: "100"});
    }
    phantom.exit();
});
