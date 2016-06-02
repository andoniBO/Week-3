//VIKING PIT

function Pit() {
  this.turns = 5;
  this.winner;
  this.state = "ready";
}

Pit.prototype.performAttack = function(viking1, viking2) {
  if(viking2.damage(viking1.strength) < viking2.health) {
    viking2.receiveDamage();
  } else {
    this.winner = viking1.name;
    this.state = "finished";
  }
}

Pit.prototype.announceFighters = function(viking1, viking2) {
  console.log('\033c');
  console.log("Hail friends!!! Welcome to Kjorseyrr Viking Pit, also known as \"The Pit\".");
  console.log("Today we are lucky to have " + viking1.name + " and " + viking2.name + " as figthers,");
  console.log("I can't hear you people cheer!! Lets go mates!!")
  console.log("");
  console.log("Fighters, remember to respect the rules:");
  console.log("1. Stop fighting before killing your friend");
  console.log("2. Low blows are not allowed");
  console.log("");
  console.log("May the gods hear us in the Valhalla!!");
  console.log("");
  console.log("                  FIGHT!!");
  console.log("");
  this.state = "fight";
}

Pit.prototype.finalAnnouncement = function() {
  if(this.state == "finished") {
    console.log("Gentlemen, we have a winner!!");
    console.log("All hail " + this.winner + "!!!");
    console.log("");
    console.log("Villagers: \"HAIL " + this.winner.toUpperCase() + "!!!\"");
  } else if(this.state == "tie") {
    console.log("Gentlemen, we have a tie!!");
    console.log("All hail our brave warriors!!!");
  }
  console.log("");
  this.state = "end";
}


module.exports = Pit;
