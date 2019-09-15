const graphql = require('graphql')
const { GraphQLInputObjectType, GraphQLString,GraphQLNonNull } = graphql


const InputList = new GraphQLInputObjectType({
	name: 'InputListType',
	description: 'List payload definition',
	fields: () => ({
		name: { type: new GraphQLNonNull(GraphQLString) }
	})
})

module.exports = InputList
