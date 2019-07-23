exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'sascha',
          password: 'toosimple',
          department: 'administration',
        },
        {
          username: 'hanne',
          password: 'plaintext',
          department: 'administration',
        },
        {
          username: 'thiara',
          password: 'wownosecurity',
          department: 'pets',
        },
      ]);
    });
};
