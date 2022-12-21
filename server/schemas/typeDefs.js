const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Class {
    _id: ID
    name: String!
    lead: String!
    members: [String]
    teams: String
    invites: [String!]
    avatar: String
  }

  type Invite {
    _id: ID
    accept: Boolean
  }

  type Team {
    _id: ID
    name: String!
    class: String!
    teamMates: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Request {
    _id: ID
    issue: String!
    requestor: String!
    class: String!
  }

  type Feedback {
    _id: ID
    description: String!
    user: String!
    team: String!
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


  type Query {
    users: [User]
    user(username: String!): User
    classes(username: String): [Class]
    class(classId: ID!): Class
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClass(class: String!): Class
  }
`

module.exports = typeDefs;