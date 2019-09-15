const express = require('express');
const graphqlHTTP = require('express-graphql') // compatability layer between express and GraphQL
const schema = require('../graphql/schema')
const bodyParser = require('body-parser');
const session = require('express-session')
// const cors = require('cors')


/* it is Eprexss API */
// step 1:Creates an Express application on top of Node.js framework
const app = express();
// app.use(cors());
app.use(express.static("app/public"));

// step 2: teach to express about json body
app.use(bodyParser.json())

// step 3: authRoutes HTTP requets hand over to express only ( not GraphQL) :signin,signup
// app.use(authRoutes);

/* step 4: Make sure that a user  have a valid token.*/
// app.get('/',
//   requireAuth,
//   (req, res) => {
//     res.send(`Your username :${req.user.username}`)
//   }
//   )


/*
step 5: if any request comes into our express looking for the route /graphql 
then we want the graphql library to handle it.
*/
app.use('/graphql',
// requireAuth,
  graphqlHTTP({
    schema,
    graphiql:true
  }),
  (req, res) => {
    res.send(`Your username :${req.user.username}`)
  },

)



module.exports = app

