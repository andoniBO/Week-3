var Viking = require('./viking.js');
var Pit = require('./pit.js');
//VIKING DUEL LOGIC

var viking1 = new Viking();
var viking2 = new Viking();
var pit = new Pit();

var turn_manager = function(fighter1, fighter2, pit) {
  var rand = Math.floor(Math.random() * 10)
  if(rand > 4) {
    pit.performAttack(fighter1, fighter2);
    if(pit.state == "fight") {
      pit.performAttack(fighter2, fighter1);
    }
  } else {
    pit.performAttack(fighter2, fighter1);
    if(pit.state == "fight") {
      pit.performAttack(fighter1, fighter2);
    }
  }
  pit.turns --;
  if(pit.turns < 1)
  {
    pit.state = "tie";
  }
}

//viking1.showStats();
//viking2.showStats();

if(pit.state == "ready") {
  pit.announceFighters(viking1, viking2);
} else {
  console.log("Error: The villagers were annihilated by Beowulf while trying to save it from Grendel's attack");
}
while(pit.turns > 0 && pit.state == "fight") {
  turn_manager(viking1,viking2,pit);
}
if((pit.state == "finished") || (pit.state == "tie")) {
  pit.finalAnnouncement();
}else {
  console.log("Error: Toothless and some other hungry night fury dragons killed and ate everyone before we the winner was decided");
}
