function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  //While there remains elements to shuffle
  while (currentIndex !== 0) {
    //pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //and swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function compare( a, b ) {
  if ( compatibilityScore(a) < compatibilityScore(b) ){
    return -1;
  }
  if ( compatibilityScore(a) > compatibilityScore(b) ){
    return 1;
  }
  return 0;
}

// The compatbility is used to rating team members
function compatibilityScore(user){
  return ((user.availability * user.experience) + user.skills.length)
}

function teamNames(){
  return [
    "AvengHERs",
    "Unbeaten",
    "Conquerors",
    "Innovators",
    "Upholders",
    "Vanquishers",
    "Synchronizers",
    "Allies",
    "Supremes",
    "Explorers",
    "Dreamers",
    "MVPs",
    "Contenders",
    "Tremendous",
    "Stupendous",
    "Legends",
    "Indispensibles",
    "Commanders",
    "Marvelous",
    "Fantastics",
    "Masters",
    "First-Class",
    "Magnificent",
    "Bosses",
    "Champions",
    "Whiz-Bang",
    "Disruptors",
    "Closers",
    "Hustlers",
    "Kickstarters",
    "Thunders",
    "Inventors",
    "Misfits",
    "Chargers",
    "Fearless",
    "Dauntless",
    "Defenders",
    "Enforcers",
    "Finishers",
    "Avant-Garde",
    "Groundbreakers",
    "Vanguards",
    "Originators",
    "Ultimate",
    "Genesis",
    "Mastermind",
    "Initiators",
    "Gladiators",
    "Unbreakables",
    "Rogues",
    "Vigilantes",
    "Synergy",
    "Vaporizers",
    "Negotiators",
    "Strikers",
    "Strivers",
    "Troubleshooters",
    "Workaholics",
    "Alpha",
    "Immortals",
    "Wunderkinds"
    ];
}

module.exports = {compare, shuffle, teamNames}

