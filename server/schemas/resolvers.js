const { AuthenticationError } = require('apollo-server-express');
const {  Class, ClassAvatar, Feedback, Invite, Request, Team, UserAvatar, User } = require('../models');
const { signToken } = require('../utils/auth');
const {compare, shuffle, teamNames} = require('../utils/helper');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username: username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    allClasses: async () => {
      return await Class.find({});
    },
    inClasses: async (parent, { username }) => {
      const user = await User.findOne({username: username});
      return await Class.find({userIds: user._id});
    },
    myClasses: async (parent, { username }) => {
      const user = await User.findOne({username: username});
      // const classObj = await Class.find({leadId: user._id});
      // console.log(classObj);
      return await Class.find({leadId: user._id});
    },
    singleClass: async (parent, { classId }) => {
      return Class.findOne({ _id: classId });
    },
    team: async (parent, { teamId }) => {
      return Team.findOne({ _id: teamId });
    },
    feedback: async (parent, { feedbackId }) => {
      return Feedback.find({ _id: feedbackId });
    },
    myFeedback: async (parent, { userId }) => {
      return Feedback.find({ userId: userId });
    },
    teamFeedback: async (parent, { teamId }) => {
      return Feedback.find({ teamId: teamId });
    },
    classFeedback: async (parent, { classId }) => {
      return Feedback.find({ classId: classId });
    },
    classAvatar: async (parent, { name }) => {
      return ClassAvatar.find({ name: name });
    },
    userAvatar: async (parent, { name }) => {
      return UserAvatar.find({ name: name });
    },
    invite: async (parent, { inviteId }) => {
      return Invite.find({ _id: inviteId });
    },
    myInvites: async (parent, { username }) => {
      const user = User.findOne({username: username});
      return Invite.find({ userId: user._id });
    },
    classInvites: async (parent, { classId }) => {
      return Invite.find({ classId: classId });
    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addClass: async (parent, { name, leadId }) => {
      const classObj = await Class.create({ 
        name: name, 
        leadId: leadId
      });
      
      return classObj;
    },
    createClass: async (parent, { name, username, description, classSize, teamSize }) => {
      const user = await User.findOne({username:username});
      
      const classObj = await Class.create({ 
        name: name, 
        leadId: user._id,
        description: description,
        classSize: classSize,
        teamSize: teamSize,
      });
      
      return classObj;
    },
    updateClassSize: async (parent, {classId, classSize }) => {
      
      const filter = { _id: classId };
      const update = { classSize: classSize };
      const classObj = await Class.findByIdAndUpdate(filter, update, { new: true });
      
      return classObj;
    },
    updateClassTeamSize: async (parent, {classId, teamSize }) => {
      
      const filter = { _id: classId };
      const update = { teamSize: teamSize };
      const classObj = await Class.findByIdAndUpdate(filter, update, { new: true });
      
      return classObj;
    },
    addUserToClass: async (parent, { classname, username }) => {
      const user = await User.findOne({username: username});

      const filter = { name: classname };
      const update = { $addToSet: {userIds: user._id} };
      const classObj1 = await Class.findOne(filter);

      if (classObj1.leadId !== user._id) {
        const classObj2 = await Class.findOneAndUpdate(filter, update, { new: true });
        return classObj2;
      } else {
        console.log("Class leader can't be added to class");
      }
      
      return classObj1;
    },
    addTeam: async (parent, { name, classId }) => {
      const team = await Team.create({ 
        name: name, 
        classId: classId
      });
      
      return team;
    },
    addUserToTeam: async (parent, { teamId, userId }) => {
      const filter = { _id: teamId };
      const update = { $addToSet: {userIds: userId} };
      const team1 = Team.findOne(filter);
      const classObj = Class.findOne({_id: team1.classId});

      if (classObj.leadId !== userId) {
        const team2 = await Team.findByIdAndUpdate(filter, update, { new: true });
        return team2;
      } else {
        console.log("Class leader can't be added to team");
      }
      
      return team1;
    },
    submitFeedback: async (parent, { rating, userId, teamId }) => {
      const feedback = await Feedback.create({rating, userId, teamId});
      
      return feedback;
    },
    submitRequest: async (parent, { issue, userId, teamId }) => {
      const request = await Request.create({issue, userId, teamId,});
      
      return request;
    },
    createInvite: async (parent, { userId, classId }) => {
      const invite = await Invite.create({userId, classId});
      
      return invite;
    },
    acceptInvite: async (parent, { inviteId }) => {
      const filter = { _id: inviteId };
      const update = { accept:true };
      const invite = await Invite.findByIdAndUpdate(filter, update, { new: true });
      
      return invite;
    },
    createTeamsRandom: async (parent, { classname }) => {
      const classObj = await Class.findOne({name: classname});
      const randomNames = shuffle(teamNames);
      // console.log(classObj.userIds);
      const randomUserIds = shuffle(classObj.userIds);
      const numTeams = Math.floor(classObj.classSize/classObj.teamSize);

      for (let i = 0; i < numTeams; i++){
        const team = await Team.create({ 
          name: randomNames[i], 
          classId: classObj._id
        });

        console.log(team._id);

        const filter = { _id: classObj._id};
        const update = { $addToSet: {teamIds: team._id} };
        await Class.findOneAndUpdate(filter, update);
      }

      for (let i = 0, j = 0; i < randomUserIds.length; i++, j++){
    
        if (j === classObj.teamSize) j = 0;
    
        const filter = { _id: classObj.teamIds[j] };
        const update = { $addToSet: {userIds: randomUserIds[i]} };
        await Team.findOneAndUpdate(filter, update);
          
      }
      
      return await Class.findOne({_id: classObj._id});
    },
    createTeamsCriteria: async (parent, { classname }) => {
      const classObj = await Class.findOne({name: classname});
      const randomNames = shuffle(teamNames);
      const numTeams = Math.floor(classObj.classSize/classObj.teamSize);
      const roster = [];

      for (let i = 0; i < classObj.classSize; i++){
        let user = await User.findOne({ 
            _id: classObj.userIds[i]
          });
        
        roster.push(user);
      }

      roster.sort(compare);

      for (let i = 0; i < numTeams; i++){
        const team = await Team.create({ 
          name: randomNames[i], 
          classId: classObj._id
        });

        const filter = { _id: classObj._id};
        const update = { $addToSet: {teamIds: roster[i]._id} };
        await Class.findOneAndUpdate(filter, update);
      }

      for (let i = 0, j = 0; i < roster.length; i++, j++){
    
        if (j === classObj.teamSize) j = 0;
    
        const filter = { _id: classObj.teamIds[j] };
        const update = { $addToSet: {userIds: roster[i]._id} };
        await Team.findOnAndUpdate(filter, update);
          
      }
      
      return await Class.findOne({_id: classObj._id});
    },

    addUserAvailability: async (parent, { username, availability}) => {
      
      const filter = { username: username };
      const update = { availability: availability };
      const user = await User.findOneAndUpdate(filter, update, { new: true });

      return user;
    },
    addUserExperience: async (parent, { username, experience}) => {
      
      const filter = { username: username };
      const update = { experience: experience };
      const user = await User.findOneAndUpdate(filter, update, { new: true });
  
      return user;
    },
    addUserSkills: async (parent, { username, skills}) => {
        
      const filter = { username: username };
      const update = { skills: skills };
      const user = await User.findOneAndUpdate(filter, update, { new: true });
  
      return user;
    },
    addUserAvatar: async (parent, { username, userAvatarId}) => {
        
      const filter = { username: username };
      const update = { userAvatarId: userAvatarId };
      const user = await User.findOneAndUpdate(filter, update, { new: true });
  
      return user;
    },
    searchUsers: async (parent, { username}) => {
      const filter = { username: username};
      const user = await User.find(filter).limit(10);
  
      return user;
    },
    searchTeams: async (parent, { name}) => { 
      console.log(name);
      const filter = { name: name};
      const teams = await Team.find(filter).limit(10);

      return teams;
    },
    listTeams: async (parent, { classname}) => { 
      const classObj = await Class.findOne({name:classname});
      let teams = await Team.find({name:"Nothin"});
  
      for (let i = 0; i < classObj.userIds.length; i++) {
        let team = await Team.find({_id: classObj.userIds[i]});
        console.log(team);
        teams.push(team);
      }
  
      return teams;
    },
  },
 
 
};

module.exports = resolvers;