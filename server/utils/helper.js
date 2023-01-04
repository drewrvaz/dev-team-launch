const userNames = [
    "4-LOM",
    "AaylaSecura",
    "AdmiralAckbar",
    "AdmiralThrawn",
    "AhsokaTano",
    "AnakinSolo",
    "AsajjVentress",
    "AurraSing",
    "SenatorBailOrgana",
    "BarrissOffee",
    "BastilaShan",
    "BenSkywalker",
    "BibFortuna",
    "BiggsDarklighter",
    "BobaFett",
    "Bossk",
    "Brakiss",
    "C-3PO",
    "CadBane",
    "CadeSkywalker",
    "CallistaMing",
    "CaptainRex",
    "CarnorJax",
    "Chewbacca",
    "Clone CommanderCody",
    "CountDooku",
    "DarthBane",
    "DarthKrayt",
    "DarthMaul",
    "DarthNihilus",
    "DarthVader",
    "DashRendar",
    "Dengar",
    "Durge",
    "EmperorPalpatine",
    "ExarKun",
    "GalenMarek",
    "GeneralCrixMadine",
    "GeneralDodonna",
    "GeneralGrievous",
    "GeneralVeers",
    "GiladPellaeon",
    "Grand MoffTarkin",
    "Greedo",
    "HanSolo",
    "IG88",
    "Jabba TheHutt",
    "JacenSolo",
    "JainaSolo",
    "JangoFett",
    "Jarael",
    "Jerec",
    "Ki-Adi-Mundi",
    "KirKanos",
    "KitFisto",
    "KyleKatarn",
    "KypDurron",
    "LandoCalrissian",
    "LukeSkywalker",
    "LuminaraUnduli",
    "Lumiya",
    "MaceWindu",
    "MaraJade",
    "MissionVao",
    "NatasiDaala",
    "NomAnor",
    "Obi-WanKenobi",
    "PadméAmidala",
    "PloKoon",
    "PreVizsla",
    "PrinceXizor",
    "PrincessLeia",
    "PROXY",
    "Qui-GonJinn",
    "QuinlanVos",
    "R2-D2",
    "RahmKota",
    "Revan",
    "SateleShan",
    "SavageOpress",
    "Sebulba",
    "ShaakTi",
    "ShmiSkywalker",
    "TalonKarrde",
    "VisasMarr",
    "Watto",
    "WedgeAntilles",
    "Yoda",
    "ZamWesell",
    "ZayneCarrick",
    "Zuckuss"
]

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

function userSeeds() {
  let users = [];
  for (let i = 0; i < userNames.length; i++){
    users.push({
      username: userNames[i], 
      email: userNames[i]+'@testmail.com',
      password: 'password12345',
      skills: [],
      experience: Math.floor(Math.random() * 3) + 1,
      availability: Math.floor(Math.random() * 3) + 1,
      userAvatarId: "default",
      inviteIds: [],
    })
  }

  return users;
}

function extraUserSeeds(){

  const arry = [
    "root",
    "admin",
    "test",
    "guest",
    "info",
    "adm",
    "mysql",
    "user",
    "administrator",
    "oracle",
    "ftp",
    "pi",
    "puppet",
    "ansible",
    "ec2-user",
    "vagrant",
    "azureuser",
    "ADSUSER",
    "ADS_AGENT",
    "CONTENTSERV",
    "CTB_ADMIN",
    "DDIC",
    "DEVELOPER",
    "EARLYWATCH",
    "IDEADM",
    "J2EE_ADMIN",
    "SAP",
    "SAPCPIC",
    "SAPJSF",
    "SAPR3",
    "SAPSUPPORT",
    "SMD_ADMIN",
    "SMD_AGT",
    "SMD_BI_RFC",
    "SMD_RFC",
    "SOLMAN_ADMIN",
    "SOLMAN_BTC",
    "TMSADM",
    "XMI_DEMO"
  ]

  let users = [];
  for (let i = 0; i < arry.length; i++){
    users.push({
      username: arry[i], 
      email: arry[i]+'@testmail.com',
      password: 'password12345',
      skills: [],
      experience: Math.floor(Math.random() * 3) + 1,
      availability: Math.floor(Math.random() * 3) + 1,
      userAvatarId: "default",
      inviteIds: [],
    })
  }

  return users;
}

module.exports = {compare, shuffle, teamNames, userSeeds, extraUserSeeds}

