//Node Packages
require('dotenv').config();
const Spotify = require('node-spotify-api');
const fs = require('fs');
const request = require('request');


//Import API Keys froms key.js
let keys = require('./keys.js');
let spotify = new Spotify(keys.spotify);

//set arguments
let firstArg = process.argv[2];
let secondArg = process.argv.slice(3).join(' ');

//list of comands 

//concert-this
const getConcert = function(input){

    

}

//spotify-this-song
//information about the song in your terminal
const getSong = function(input){
   
}

//movie-this
//information about the movie in terminal
const getMovie = function(input){
    


}
//do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
const txtCommand = function(){
   
}


//switch commands
switch (firstArg){

    case 'concert-this':
      getConcert(secondArg);
      break;

    case 'spotify-this-song':
      getSong(secondArg);
      break;

    case 'movie-this':
      getMovie(secondArg);
      break;

    case 'do-what-it-says':
    txtCommand(secondArg);
      break;
    default:
        break;

}



//Challenge
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file. 
// Do not overwrite your file each time you run a command.
