module.exports = function initial(db) {
  const Role = db.role;
  Role.create({
    id: 1,
    code: 'client',
    name: 'client',
  });

  Role.create({
    id: 2,
    code: 'moderateur',
    name: 'modérateur',
  });

  Role.create({
    id: 3,
    code: 'admin',
    name: 'admin',
  });
};
