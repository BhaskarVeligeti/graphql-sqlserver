const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql



const Token= new GraphQLObjectType({
        name:'TokenType',
        fields:()=>({
            token: { type: GraphQLString }
        })


})


module.exports = Token




