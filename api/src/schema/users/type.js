// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// UserType
const UserType = new GraphQLObjectType({
    name: 'user',
    description: '用户表',

    fields: () => ({
        id: { type: GraphQLInt },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default UserType