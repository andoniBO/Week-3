//VIKINGS
function Viking() {
  this.viking_names = ["Alfhild","Alvilda","Aslaug","Ragnar","Lagertha","Purunn","Bjorn","Floki","Dagmar","Halvard"];
  this.experience_points = 0;
  this.level = (this.experience_points/100) +1;
  this.name = this.viking_names[Math.floor(Math.random() * 10)];
  this.health = ((this.level * 10) + (Math.floor((Math.random() * 10) + 1) * Math.floor((Math.random() * 10) + 1)));
  this.strength = (this.level * 5) + (Math.floor((Math.random() * 5) + 1) * Math.floor((Math.random() * 5) + 1));
  this.defense = (this.level * 5) + (Math.floor((Math.random() * 5) + 1) * Math.floor((Math.random() * 5) + 1));
}

Viking.prototype.showStats = function() {
  console.log("");
  console.log("Name: " + this.name);
  console.log("Health: " + this.health)
  console.log("Strength: " + this.strength);
  console.log("Defense: " + this.defense);
  console.log("Experience points: " + this.experience_points);
  console.log("Level: " + this.level);
  console.log("");
}

Viking.prototype.damage = function(enemy_strength) {
  return enemy_strength - this.defense;
}

Viking.prototype.receiveDamage = function(damage) {
  return this.health -= damage;
}

module.exports = Viking;

/*
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
  console.log("Error: The arena and all the villagers were destroyed by Beowulf while trying to save it from Grendel's attack");
}
while(pit.turns > 0 && pit.state == "fight") {
  turn_manager(viking1,viking2,pit);
}
if((pit.state == "finished") || (pit.state == "tie")) {
  pit.finalAnnouncement();
}else {
  console.log("Error: Toothless and some other night fury were hungry and killed everyone when the battle ended");
}
*/
