const db = require('../config/connection');
const { User, Team, Class } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  const users = await User.insertMany([
    [{username: 'HanSolo'},
    {email: 'hsolo@testmail.com'},
    {password: 'password1234'},
  ],
   [{username: 'LukeSkywalker'},
    {email: 'lskywalker@testmail.com'},
    {password: 'password1234'},
  ],
    [{username: 'BobaFett'},
    {email: 'bfett@testmail.com'},
    {password: 'password1234'},
  ],
    [{username: 'DarthVader'},
    {email: 'dvader@testmail.com'},
    {password: 'password1234'},
  ],
    [{username: 'JabbaTheHutt'},
    {email: 'jhutt@testmail.com'},
    {password: 'password1234'},
  ]

    // await User.create({
    //   username: 'LeiaSkywaler',
    //   email: 'leiasky@testmail.com',
    //   password: 'password1234',
    // });
    // await User.create({
    //   username: 'KyloRen',
    //   email: 'kren@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'SheevPalpatine',
    //   email: 'spalpatine@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'Obi-WanKenobi',
    //   email: 'okenobi@testmail.com',
    //   password: 'password1234',
    // });
    // await User.create({
    //   username: 'AhsokaTano',
    //   email: 'atano@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'CassianAndor',
    //   email: 'candor@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'Rey',
    //   email: 'rey@testmail.com',
    //   password: 'password1234',
    // });
    // await User.create({
    //   username: 'JangoFett',
    //   email: 'jfett@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'BibFortuna',
    //   email: 'bfortuna@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'CountDooku',
    //   email: 'cdooku@testmail.com',
    //   password: 'password1234',
    // });
    // await User.create({
    //   username: 'MaceWindu',
    //   email: 'mwindu@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'Qui-Gon Jin',
    //   email: 'QJin@testmail.com',
    //   password: 'password1234',
    // });

    // await User.create({
    //   username: 'LandoCalrissian',
    //   email: 'lcalrissian@testmail.com',
    //   password: 'password1234',
    // });
]);
  console.log('users seeded');
  
  await Class.deleteMany();

  const classes = await Class.insertMany([
    class1 = Class.create({name: "Name", leadId: user[0]._id}),
    class2 = Class.create({name: "Name", leadId: user[1]._id})
  //   { name: 'The Resistance',
  // leadId:'63b3886bd1d02004e6efbde2' },
  //   { name: 'First Order',
  //   leadId:'63b3886bd1d02004e6efbde6' },
  //     { name: 'Dark Side',
  //     leadId: '63b3886bd1d02004e6efbdde'},
  // ]);
  ]);
  console.log('classes seeded');

  await Team.deleteMany();


  for (let i= 0; i<users.length; i++) {
    const {_id, team } =await Team.create(teamSeeds[i]);
    const user = await User.findOneAndUpdate(
      { username: className },
      {
        $addToSet: {
          teamIds: team1._id,
        },
      }
      };
    );
  };

  // const teams = await Team.insertMany([
  //   team1=Team.create({name: "Name", classId: class1._id, userdIds:[user[0]._id, user[1]._id, user[2]._id]}),
  //   team2=Team.create({name: "Name", classId: class1._id, userdIds:[user[3]._id, user[4]._id, user[5]._id]}),
  //   await Class.findOneAndUpdate({_idclass1._id},addtoset:{teamIIds:team1._id}})
  // ])
    //     {
//         name: "The Jedi Knights",
//         classId: "63b385fcac46850a92b36ef5",
//         userIds: "[63b3886bd1d02004e6efbdda, 63b3886bd1d02004e6efbde8, 63b3886cd1d02004e6efbdee]",
//         avatar : "",
//         Class: classes[0]._id,
//     },
//     {
//       name: "The Republic",
//       classId: "63b3886bd1d02004e6efbdc6",
//       userIds: "[63b3886cd1d02004e6efbdee, 63b3886cd1d02004e6efbdf2, 63b3886cd1d02004e6efbdf6]",
//       avatar : "",
//       Class: classes[1]._id,
//   },
//   {
//     name: "The Rebel Alliance",
//     classId: "63b3886bd1d02004e6efbdc6",
//     userIds: "[63b3886bd1d02004e6efbde2,63b3886bd1d02004e6efbdd8, 63b3886bd1d02004e6efbdda]",
//     avatar : "",
//     Class: classes[0]._id,
// },
// {
//   name: "Bounty Hunters",
//   classId: "63b3886bd1d02004e6efbdc9",
//   userIds: "[63b3886bd1d02004e6efbddc,63b3886cd1d02004e6efbdf0]",
//   avatar : "",
//   Class: classes[1]._id,
// },
// {
//   name: "Ewoks",
//   classId: "63b3886bd1d02004e6efbdc6",
//   userIds: "[63b3886cd1d02004e6efbdf2, 63b3886cd1d02004e6efbdf8]",
//   avatar : "",
//   Class: classes[0]._id,
// },
// {
// name: "Droids",
// classId: "63b3886bd1d02004e6efbdc8",
// userIds: "[63b3886bd1d02004e6efbde4, 63b3886bd1d02004e6efbdea]",
// avatar : "",
// Class: classes[1]._id,
// },
// {
// name: "Star Destroyers",
// classId: "63b3886bd1d02004e6efbdc9",
// userIds: "[63b3886bd1d02004e6efbde6, 63b3886bd1d02004e6efbdea, 63b3886cd1d02004e6efbdec]",
// avatar : "",
// Class: classes[0]._id,
// },
// {
// name: "Dreadnoughts",
// classId: "63b3886bd1d02004e6efbdc9",
// userIds: "[63b3886cd1d02004e6efbdf2, 63b3886cd1d02004e6efbdf4]",
// avatar : "",
// Class: classes[1]._id,
// },
    
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

  await User.create({
    username: 'BobaFett',
    email: 'bfett@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });
  await User.create({
    username: 'DarthVader',
    email: 'dvader@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'JabbaTheHutt',
    email: 'jhutt@testmail.com',
    password: 'password1234',
  });

  await User.create({
    username: 'LeiaSkywaler',
    email: 'leiasky@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });
  await User.create({
    username: 'KyloRen',
    email: 'kren@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'SheevPalpatine',
    email: 'spalpatine@testmail.com',
    password: 'password1234',
  });

  await User.create({
    username: 'Obi-WanKenobi',
    email: 'okenobi@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });
  await User.create({
    username: 'AhsokaTano',
    email: 'atano@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'CassianAndor',
    email: 'candor@testmail.com',
    password: 'password1234',
  });

  await User.create({
    username: 'Rey',
    email: 'rey@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });
  await User.create({
    username: 'JangoFett',
    email: 'jfett@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'BibFortuna',
    email: 'bfortuna@testmail.com',
    password: 'password1234',
  });

  await User.create({
    username: 'CountDooku',
    email: 'cdooku@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });
  await User.create({
    username: 'MaceWindu',
    email: 'mwindu@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  await User.create({
    username: 'Qui-Gon Jin',
    email: 'QJin@testmail.com',
    password: 'password1234',
  });

  await User.create({
    username: 'LandoCalrissian',
    email: 'lcalrissian@testmail.com',
    password: 'password1234',
    classes: [
      {
        classes: [classes[0]._id, classes[0]._id, classes[1]._id],
      },
    ],
  });

  console.log('users seeded');

  process.exit();
});
