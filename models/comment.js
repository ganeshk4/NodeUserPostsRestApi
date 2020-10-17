
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    content: DataTypes.TEXT,
  }, {
    freezeTableName: true,
  });

  comment.associate = function(models) {
    // associations can be defined here
    comment.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

    comment.belongsTo(models.post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE'
    });
  };
  return comment;
};