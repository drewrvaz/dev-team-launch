const db = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const classSeeds = require('./classSeeds.json');

db.once('open', async () => {
  try {
    
    await User.deleteMany({});

    await User.create(userSeeds);


    //for CLASS:
    // find user by id 
    //use id and generate a class name from a list of names
    //add a class (create a class using user id and class name)

    //FOR TEAMS:
    // find a team by id
    //generate team name from a list of team names
    //add a team using class id and team name

    for (let i = 0; i < classSeeds.length; i++) {
      
      const user = await User.findOneAndUpdate(
        
        {
          $addToSet: {
           classId
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
