const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID} = graphql 


const OutPutList = new GraphQLObjectType({
  name: 'ListType',
  fields: () => ({
    id: { type: GraphQLID },
	  name: { type: GraphQLString },
	 
  })
})

module.exports = OutPutList