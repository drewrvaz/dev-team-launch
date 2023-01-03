const db = require('../config/connection');
const { Class, Team, User } = require('../models');

const classData = require('./classData.json');
const teamData = require('./teamData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  // clean database 
  await Class.deleteMany({});
  await Team.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const classes = await Class.insertMany(classData);
  const teams = await Team.insertMany(teamData);
  const users = await User.insertMany(userData);

  for (newTeam of teams) {
    // randomly add each Team to a class
    // randomly add each class to a school
    const tempClass = classes[Math.floor(Math.random() * classes.length)];
    tempClass.teams.push(newTeam._id);
    await tempClass.save();

    // randomly add a lead to each Team
    const tempUser = users[Math.floor(Math.random() * users.length)];
    newTeam.user = tempUser._id;
    await newTeam.save();

    // reference team on professor model, too
    tempUser.teams.push(newTeam._id);
    await tempUser.save();
  }

  console.log('all done!');
  process.exit(0);
});
