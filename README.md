# fakenewsrepo
fake news repo opensource

# Important!!
# index_notes.js has node, express, cheerio, and request webscraper info for static websites.

# This ReadMe and live-server install.txt has casper.js and phantom.js webscraping notes (both incomplete) for nested javascript websites with the embeeded required info you need.



Always use a VPN! xD


In the scripts folder this will create a package.JSON file
# sudo npm init

Install express.js in that same folder:
# sudo npm install -g express
# sudo npm install --save express request cheerio path handlebars


============================================================================================================================================================================================
from medium:

Project Setup.

Create a new project folder. Within that folder create an index.js file. We’ll need to install and require our dependencies. Open up your command line, and install and save: request, request-promise, and cheerio

# sudo npm install --save request request-promise cheerio



Then require them in our index.js file:

const rp = require("request-promise");
const cheerio = require("cheerio");
const options = {
  uri: "https://www.google.com",
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });


I disabled eslint and tested my live-server public to see if I can get a callback:


[zuleikarose@Normandy scripts]$ node index.js
Javascript is awesome!
{ [Function: initialize]
  fn: 
   initialize {
     constructor: [Circular],
     _originalRoot: 
      { type: 'root',
        name: 'root',
        namespace: 'http://www.w3.org/1999/xhtml',
        attribs: {},
        'x-attribsNamespace': {},
        'x-attribsPrefix': {},
        children: [Object],
        parent: null,
        prev: null,
        next: null } },
  load: [Function],
  html: [Function],
  xml: [Function],
  text: [Function],
  parseHTML: [Function],
  root: [Function],
  contains: [Function],
  merge: [Function],
  _root: 
   { type: 'root',
     name: 'root',
     namespace: 'http://www.w3.org/1999/xhtml',
     attribs: {},
     'x-attribsNamespace': {},
     'x-attribsPrefix': {},
     children: [ [Object], [Object] ],
     parent: null,
     prev: null,
     next: null },
  _options: 
   { withDomLvl1: true,
     normalizeWhitespace: false,
     xml: false,
     decodeEntities: true } }



     
     =========================================================================================
     
     
     http://indecision.mead.io/



setting up live public server:
create a place for projects. Decide were you want the folder.

r-04-02-web-server.zip
extract react-course-projects
create indecision app folder and open though vscode

# cd into indecision-app folder
create a public folder in the indecision app folder
create a index.html file in the public folder

on the terminal while in the indecision-app folder
# sudo yarn global add live-server
# live-server -v

only if yarn does not work:
on the terminal while in the indecision-app folder
# sudo npm install -g live-server
# live-server -v

after this to launch the server:
cd into the indecision app folder
# live-server public
(you will see something similar to 127.0.0.1:8080)
*Note always cd into the folder above the public one which you want the live server to run xD


# sudo npm install -g flow-bin --save <==== good to have
# sudo npm install -g  intellisense --save <==== good to have for command terminal
# sudo npm install -g phantom --save
# sudo npm install -g casperjs --save
You can install CasperJS using npm: <== for webscrpaing

    For most users (current version 1.1.0-beta4):

        $ sudo npm install -g casperjs --save

    If you want a specific older version:

            For beta3: $ sudo npm install -g casperjs@1.1.0-beta3 --save
            For beta2: $ sudo npm install -g casperjs@1.1.0-beta2 --save

    If you want to install the current master from git using npm:

        $ sudo npm install -g git+https://github.com/casperjs/casperjs.git



/*While CasperJS is installable via npm, it is not a NodeJS module and will not work with NodeJS out of the box. You cannot load casper by using require(‘casperjs’) in node. Note that CasperJS is not capable of using a vast majority of NodeJS modules out there. Experiment and use your best judgement.*/

http://docs.casperjs.org/en/latest/installation.html#installing-from-npm

http://phantomjs.org/quick-start.html
http://phantomjs.org/download.html

How to set up phantomjs in a linux directory xD

This looks complicated but it really isn’t.  Here’s the basic format:
general format template:
	
alias aliasname='commands' 

So This is how I did it on the last two lines:
#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ ' 

# kwrite ~/.bashrc
alias phantomjs="/run/media/zuleikarose/Alice\ My\ Book/MOOC/phantomjs-2.1.1-linux-x86_64/bin/phantomjs"

cd to folder where you want to run phantomjs
# cd /run/media/zuleikarose/Alice\ My\ Book/MOOC/techhire/public/scripts/index.js
call phantomjs:
#phantomjs
to exit:
phantom.exit()


I got error:
[zuleikarose@Normandy scripts]$ phantomjs
phantomjs> index.js
Can't find variable: index

  phantomjs://repl-input:1 in global code
phantomjs> 


incorrect way to create a .pdf screenshot of a website:
phantomjs rasterize.js http://www.google.com test1.pdf
returns error:
phantomjs://repl-input:1 in global code

correct way to create a .pdf screenshot of a website
phantomjs rasterize.js http://www.google.com test1.pdf

phantomjs index.js http://127.0.0.1:8080/# test1.pdf



$ phantomjs --proxy=ip:port script.js url
  phantomjs --proxy=socks:
  phantomjs --proxy=http://127.0.0.1:8080/# /run/media/zuleikarose/Alice\ My\ Book/MOOC/techhire/public/scripts/index.js 

================================================================================================

sudo gedit ~/.bashrc

[zuleikarose@Normandy phantomjs-2.1.1-linux-x86_64]$ cd /run/media/zuleikarose/Alice\ My\ Book/MOOC/phantomjs-2.1.1-linux-x86_64/bin/phantomjs


  571  touch hello.js
  572  kwrite hello.js 
  573  phantomjs hello.js 
   576  cd /run/media/zuleikarose/Alice\ My\ Book/MOOC/phantomjs-2.1.1-linux-x86_64/bin/

[zuleikarose@Normandy bin]$ phantomjs hello.js 
hello



