const { AuthenticationError } = require('apollo-server-express');
const {  Class, ClassAvatar, Feedback, Invite, Request, Team, UserAvatar, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    classes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Class.find(params);
    },
    class: async (parent, { classId }) => {
      return Class.findOne({ _id: classId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    team: async (parent, { teamId }) => {
      return Team.findOne({ _id: teamId });
    },
    feedback: async (parent, { teamId }) => {
      return Feedback.find({ teamId: teamId });
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

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addClass: async (parent, { name, lead}) => {
      const user = await User.create({ name, lead });
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
      const classObj = await Class.create({ name, leadId});

      console.log(classObj);
      
      return classObj;
    },
    addUserToClass: async (parent, { userId, classId }) => {
      
      const filter = { _id: classId };
      const update = { $addToSet: {userIds: userId} };
      const classObj1 = Class.findOne(filter);

      if (classObj1.leadId !== userId) {
        const classObj2 = await Class.findOneandUpdate(filter, update, { new: true });
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
        const team2 = await Team.findOneandUpdate(filter, update, { new: true });
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
      const invite = await Invite.findOneandUp(filter, update, { new: true });
      
      return invite;
    },
    
  },
};

module.exports = resolvers;