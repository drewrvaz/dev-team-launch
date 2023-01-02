const db = require('../config/connection');
const { User, Team, Class } = require('../models');

db.once('open', async () => {
  await Class.deleteMany();

  const classes = await Class.insertMany([
    { name: 'Jedi',
  leadId:'63a48f8355057de172ce6ba7' },
    { name: 'Sith',
    leadId: '63a48f8355057de172ce6ba6'},
  ]);

  console.log('classes seeded');

  await Team.deleteMany();

  const teams = await Team.insertMany([
    {
        name: "The Resistance",
        classId: "63a50be87f424ad8db1ca8ab",
        userIds: "[63a48f8355057de172ce6ba6, 63a48f8355057de172ce6ba7, 63a48f8355057de17…]",
        avatar : "../images/lion.png",
        Class: classes[0]._id,
    },
    {
      name: "The Republic",
      classId: "63a50c587f424ad8db1ca8af",
      userIds: "[63a48f8355057de172ce6bab,63a48f8355057de172ce6bad, 63a48f8355057de172…]",
      avatar : "../images/whiteTiger.png",
      Class: classes[1]._id,
  },
    
  ]);

  console.log('teams seeded');

  await User.deleteMany();

  await User.create({
    username: 'HanSolo',
    email: 'hsolo@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'LukeSkywalker',
    email: 'lskywalker@testmail.com',
    password: 'password1234',
  });

  console.log('users seeded');

  process.exit();
});
