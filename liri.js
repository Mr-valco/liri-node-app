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

    //Setup API Call
    let queryUrl = (`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`);

    request(queryUrl, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {

            var parsedData = JSON.parse(body);

            parsedData.forEach(function (e) {

                console.log('\r\n ____VM____ \r\n\n' 
                + 'Artist: ' + e.lineup[0] + '\r\n'
                + 'Venue: ' + e.venue.name + '\r\n'
                + 'Venue Location: ' + e.venue.city + '\r\n' 
                + 'Event Date: ' + e.datetime + '\r\n\n end.. \r\n');

            }, this);
        }
    });

}

//spotify-this-song
//information about the song in your terminal
const getSong = function(input){
    if(!input){
        input = "What's My Age Again"
    }

    spotify.search({type: 'track', query: input }, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log('\r\n __BISCUITS_YES_BISCUITS__ \r\n\n' 
        + 'Artist: ' + data.tracks.items[0].artists[0].name + '\r\n' 
        + 'Song Name: ' + data.tracks.items[0].name + '\r\n' 
        + 'Preview link: ' + data.tracks.items[0].preview_url + '\r\n' 
        + 'album: ' + data.tracks.items[0].album.name + '\r\n\n end.. \r\n');
    });
}

//movie-this
//information about the movie in terminal
const getMovie = function(input){
    
    if(!input){
        input = "Mr.Nobody";
    }
    //API Call
    let queryUrl = (`http://www.omdbapi.com/?t=${input}&plot=short&apikey=trilogy`);

    request(queryUrl, function (error, response, body) {

        if (!error && response.statusCode === 200) {
           //th console.log(body);
        
            var parsedData = JSON.parse(body);
        
            console.log('\r\n __BISCUITS_YES_BISCUITS__ \r\n\n' 
            + 'Title: ' + parsedData.Title + '\r\n' 
            + 'Year: ' + parsedData.Year + '\r\n'
            + 'IMDB Rating: ' + parsedData.imdbRating + '\r\n' 
            + 'Rotten Tomatoes Rating: ' + parsedData.Ratings[1].Value + '\r\n' 
            + 'Country: ' + parsedData.Country + '\r\n'
            + 'Language: ' + parsedData.Language + '\r\n'
            + 'Plot: ' + parsedData.Plot + '\r\n'
            + 'Actors: ' + parsedData.Actors + '\r\n\n end.. \r\n');
        }
    });

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
