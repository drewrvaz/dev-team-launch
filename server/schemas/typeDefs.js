const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    skills: [String]
    availability: Int
    experience: Int
    userAvatarId: String
    inviteIds: [String]
  }

  type Class {
    _id: ID
    name: String!
    leadId: String!
    description: String
    userIds: [String]
    teamIds: [String]
    inviteIds: [String]
    classAvatarId: String
    teamSize: Int
    classSize: Int
  }

  type Invite {
    _id: ID
    userId: String!
    classId: String!
    accept: Boolean
  }

  type Team {
    _id: ID
    name: String!
    classId: String!
    userIds: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Request {
    _id: ID
    issue: String!
    userId: String!
    classId: String!
  }

  type Feedback {
    _id: ID
    rating: Int!
    userId: String!
    teamId: String!
    classId: String!
  }

  type UserAvatar {
    _id: ID
    name: String!
    icon: String!
  }

  type ClassAvatar {
    _id: ID
    name: String!
    icon: String!
  }

  type TeamAvatar {
    _id: ID
    name: String!
    icon: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    allClasses: [Class]
    inClasses(username: String!): [Class]
    myClasses(username: String!): [Class]
    singleClass(classId: ID!): Class
    team(teamId: ID!): Team
    feedback(feedbackId: ID!): Feedback
    myFeedback(userId: ID!): [Feedback]
    teamFeedback(teamId: ID!): [Feedback]
    classFeedback(classId: ID!): [Feedback]
    classAvatar(name: String!): ClassAvatar
    userAvatar(name: String!): UserAvatar
    invite(inviteId: ID!): Invite
    myInvites(username: String!): [Invite]
    classInvites(classId: String!): [Invite]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClass(name: String!, leadId: String!): Class
    updateClassTeamSize(classId: String!,teamSize: Int): Class
    updateClassSize(classId: String!,classSize: Int): Class
    addUserToClass(classId: String!, userId: String!): Class
    addTeam(name: String!, classId: String!): Team
    addUserToTeam(teamId: String!, userId: String!): Team
    submitFeedback(rating: String!, userId: String!, teamId: String!): Feedback
    submitRequest(issue: String!, userId: String!, teamId: String!): Request
    createInvite(userId: String!, classId: String): Invite
    acceptInvite(inviteId: String!): Invite
    createTeamsRandom(classId: String!): Class
    createTeamsCriteria(classId: String!): Class

  }
`

module.exports = typeDefs;