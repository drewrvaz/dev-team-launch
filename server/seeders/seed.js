const db = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const classSeeds = require('./classSeeds.json');

db.once('open', async () => {
  try {
    
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < classSeeds.length; i++) {
      
      const user = await User.findOneAndUpdate(
        
        {
          $addToSet: {
           
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
