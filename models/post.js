
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    content: DataTypes.TEXT,
  }, {
    freezeTableName: true,
  });

  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Post;
};