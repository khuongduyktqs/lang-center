module.exports = (sequelize, Sequelize) => {
  const Learning = sequelize.define(
    'Learning',
    {
      idStudent: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'idstudent',
      },
      idClass: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'idclass',
      },
      idExam: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'idexam',
      },
      score: {
        type: Sequelize.FLOAT,
        field: 'score',
      },
    },
    {
      freezeTableName: true,

      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );

  return Learning;
};
