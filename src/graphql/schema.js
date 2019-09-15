const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const query = require('../graphql/rootquery/RootQuery');
const mutation = require('../graphql/mutations/mutations');
/*
The purpose of the schema file is to instruct GraphQL what type of data we have in our application.

GraphQL is a layer on top of the ORM which in turn is a layer on top of the database. 

*/



const schema = new GraphQLSchema({
	query,
	mutation
});

module.exports=schema