/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// test

/***
 * `quotes` array
***/

// quotes is an Array with 4 Objects.

/*  Objects with 5 properties :
- quote
- source
- tags
- citation
- year
*/

let quotes = [

  {
    quote : 'The only truth is music.',
    source : 'Jack Kerouac'
  },

  {
    quote : 'Paths are made by walking.',
    source : 'Franz Kafka'
  },

  {
    quote : 'The greater the ambiguity, the greater the pleasure.',
    source : 'Milan Kundera'
  },

  {
    quote : 'Awe is what moves us forward.',
    source : 'Joseph Campbell',
    citation : 'A Joseph Campbell Companion: Reflections on the Art of Living',
    year : 1991
  }

] ;

/***
 * `getRandomQuote` function
***/

// getRandomeQuote returns a random quote object from the Array "quotes".

/*
randomNumber : between 0 and the Array's length.
randomQuote : one of the 4 quote objects.
*/

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

/***
 * `printQuote` function
***/

// printQuote returns an HTML string on the page.

/* storeQuote : a variable to store what the getRandomQuote function returns.
quoteString : a concatenated HTML string with the object's various properties.
first condition : checks if the quote has a citation property.
second condition : checks if the quote has a year property.
third condition : checks if the quote has a tags property.
*/

function printQuote () {
  let storedQuote = getRandomQuote();
  let quoteString =
    '<p class="quote">' + storedQuote.quote + '</p> \
     <p class="source">' + storedQuote.source ;

     if(storedQuote.citation) {
       quoteString += '<span class="citation">' + storedQuote.citation + '</span>'
     };
     if(storedQuote.year) {
       quoteString += '<span class="year">' + storedQuote.year + '</span>'
     };
     if(storedQuote.tags) {
       quoteString += '<span class="year">' + storedQuote.tags + '</span>'
     };

     quoteString += '</p>'

  document.getElementById('quote-box').innerHTML = quoteString;
  random_bg_color();
}

printQuote ()

// intervalID calls the printQuote function every 10 seconds.

var intervalID = window.setInterval(printQuote, [10000]);

// random_bg_color changes the background color at random every time the printQuote function is called.
/*
This code was found with Google.
Credits go to w3resource.com
This function is declared after it is called.
*/

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
