var Viking = require('./viking.js');
var Saxon = require('./saxon.js');
var Pit = require('./pit.js');
//ASSAULT LOGIC

var sailors = Math.floor(Math.random() * 10);
var boat = [];
for(var i = 0; i < (10 + sailors); i++) {
  boat.push(new Viking());
}

var tourists = Math.floor(Math.random() * 10) * 5;
var village = [];
for(var i = 0; i < (50 + tourists); i++) {
  village.push(new Saxon());
}
