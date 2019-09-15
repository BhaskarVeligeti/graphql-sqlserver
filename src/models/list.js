export default (sequelize, DataTypes) => {
    const List = sequelize.define('list', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
      },
      {
        freezeTableName: true,
      }
    );
  
    // Post.associate = (models) => {
    //   Post.belongsTo(models.author);
    // };
  
    return List;
  }