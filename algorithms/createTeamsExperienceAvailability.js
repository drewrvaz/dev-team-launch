const {  User, Class, Team } = require('../models');

// Determine number of teams based on the ClassSize and the TeamSize
const numTeams = Math.floor(classObj.classSize/classObj.teamSize);
const reminder = (classObj.classSize/classObj.teamSize);

// This is a paramter provided by the Endpoint currently a placeholder
const classId = "String"

// Find the Class that we are working with
const classObj = Class.findOne({_id: classId});

// Creating teams
for (let i = 0; i < numTeams; i++){
    let team = await Team.create({ 
        name: generateRandomName(), 
        classId: classObj._id
      });
    
    // classObj.push(team._id);
    const filter = { _id: classId};
    const update = { $addToSet: {teamIds: team._id} };
    await Class.findOneandUpdate(filter, update, { new: true });
}

// This will be provided by whoever has accepted the class
// Or, it will be provided by all Users in the submitted to the Class Function
const roster = [];

for (let i = 0; i < classObj.classSize; i++){
    let user = await User.findOne({ 
        _id: classObj.userIds[i]
      });
    
    roster.push(user);
}

// Sort the roster lenght was set by the class/project size
// Project size is 10
roster.sort(compare);

// Add the Users the teams
for (let i = 0, j = 0; i < roster.length; i++, j++){
    
    if (j === classObj.teamSize) j = 0;

    const filter = { _id: classObj.teamIds[j] };
    const update = { $addToSet: {userIds: roster[i]._id} };
    await Team.findOneandUpdate(filter, update, { new: true });
      
}

// Useed for the Sort
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

// Possibility use names from different Movies or TV shows
function generateRandomName(){
    return "SomeName"
}