
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      name: DataTypes.STRING,
    }, {
      freezeTableName: true,
    });
    return user;
};