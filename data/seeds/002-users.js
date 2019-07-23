exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'sascha',
          password: bcrypt.hashSync('toosimple', 10),
          department: 'administration',
        },
        {
          username: 'hanne',
          password: bcrypt.hashSync('plaintext', 10),
          department: 'administration',
        },
        {
          username: 'thiara',
          password: bcrypt.hashSync('wownosecurity', 10),
          department: 'pets',
        },
      ]);
    });
};
