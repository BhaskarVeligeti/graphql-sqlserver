const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLInt, GraphQLString, GraphQLFloat } = graphql


// models.....
const db = require('../../models');


// Output.....
const ListType = require('../output/output_list')


// inputs.....



// helpers....




/**
 * RootQuery used to allow GraphQL enter into application data graph, by using resolve() go to database get the data and send as response object
 */
const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: () => ({

	/*-----------------------------------------------  Users ------------------------------------------------------------------------*/
	users: {
		type: new GraphQLList(ListType),
		args: {},
		resolve(parentValue, args, req) { 
			return db.list.findAll();
			
		}
	}, // end of users
			







	}) // end of fields
})
module.exports = RootQuery
