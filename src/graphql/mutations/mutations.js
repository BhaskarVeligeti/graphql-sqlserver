const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLBoolean } = graphql



// models.....
const db = require('../../models');

// Output.....
const Output_List = require('../output/output_list')


// Input.....
const Input_List = require('../input/input_list')


// helpers....
const saveList = require('../../dbhelper/saveList')



const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({

    /*-----------------------------------------------------add List-------------------------------------------------------------------*/
    addList: {
      type: Output_List,
      args: {
        input: {
          type: new GraphQLNonNull(Input_List)
        }
      },
      resolve(parentValue, { input }, req) {
        // console.log('db :', db.sequelize.connectionManager.config)
        return saveList(input,db)
      }


    } // end of List	





















  }) // end of fields

}) // end of mutation

module.exports = mutation
