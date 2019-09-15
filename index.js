const db = require('./src/models');
const server = require('./src/express/server');

/* Testing the connection */
db.sequelize
  .authenticate()
  .then(() => {
    console.log('MSSQLServer 2016 Connection has been established successfully.');
    /**sequelize using the sync method. This method will sync (create tables for) all models that aren’t already in the database. */
    db.sequelize.sync().then(function () {
      server.listen(process.env.PORT || 4000, () => {
        console.log(`Running a GraphQL API server at http://localhost:${process.env.PORT || 4000}/graphql`)
      })
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
