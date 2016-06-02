//SAXONS

function Saxon() {
  this.experience_points = 0;
  this.level = (this.experience_points/100) +1;
  this.health = ((this.level * 10) + (Math.floor((Math.random() * 10) + 1) * Math.floor((Math.random() * 10) + 1))) * 0.1;
  this.strength = ((this.level * 5) + (Math.floor((Math.random() * 5) + 1) * Math.floor((Math.random() * 5) + 1))) * 0.1;
  this.defense = ((this.level * 5) + (Math.floor((Math.random() * 5) + 1) * Math.floor((Math.random() * 5) + 1))) * 0.1;
}

Saxon.prototype.showStats = function() {
  console.log("");
  console.log("  ***Saxon farmer stats***")
  console.log("Health: " + this.health)
  console.log("Strength: " + this.strength);
  console.log("Defense: " + this.defense);
  console.log("Experience points: " + this.experience_points);
  console.log("Level: " + this.level);
  console.log("");
}

Saxon.prototype.damage = function(enemy_strength) {
  return enemy_strength - this.defense;
}

Saxon.prototype.receiveDamage = function(damage) {
  return this.health -= damage;
}

module.exports = Saxon;
