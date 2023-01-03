const db = require('../config/connection');
const { User, Team, Class } = require('../models');
const { userSeeds, teamNames, shuffle} = require('../utils/helper');

db.once('open', async () => {
  await User.deleteMany();
  await Class.deleteMany();
  await Team.deleteMany();


  const users = await User.insertMany(userSeeds());
  console.log('users seeded');

  const classes = await Class.insertMany([
    {
      name: "RogueOne", 
      leadId: users[0]._id
    },
    {
      name: "StarDust", 
      leadId: users[1]._id
    },
    {
      name: "DeathStar", 
      leadId: users[2]._id
    },
    {
      name: "CloneWars", 
      leadId: users[3]._id
    },
    {
      name: "NewOrder", 
      leadId: users[4]._id
    },

  ]);

  for (let i = 5, j = 0; i < users.length; i++, j++){
    
    if (j === 5) j = 0;

    await Class.findOneAndUpdate(
      {_id: classes[j]._id},
      { $addToSet: {userIds: users[i]._id} },
      {new:true}
    );

  }

  console.log('classes seeded');

  const tNames = shuffle(teamNames());
  const teamsPerClass = 4;
  const numTeams = teamsPerClass * classes.length;

  let teamSeeds = [];
  for (let i = 0, j = 0; i < numTeams; i++,j++){

    if (j === classes.length) j = 0;

    teamSeeds.push({
      name: tNames[i],
      classId: classes[j]._id
    });
  }

  const teams = await Team.insertMany(teamSeeds);

  for (let i = 0; i < teams.length; i++){
    await Class.findOneAndUpdate(
      {_id: teams[i].classId},
      { $addToSet: {teamIds: teams[i]._id} }
    );
  }

  for (let i = 0; i < classes.length; i++){

    let classObj = await Class.findOne({_id: classes[i]._id});

    // console.log(classObj.userIds);

    for (let x = 0, j = 0; x < classObj.userIds.length; x++, j++){
        
        if (j === teamsPerClass) j = 0;

        await Team.findOneAndUpdate(
          { _id: classObj.teamIds[j]},
          { $addToSet: { userIds: classObj.userIds[x] }}
        );
    }
  }
  console.log('teams seeded');
  process.exit();
});
