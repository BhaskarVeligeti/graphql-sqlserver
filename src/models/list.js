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
    return List;
  }