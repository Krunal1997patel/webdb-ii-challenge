
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('carInfo').insert([
        {vin: 835967, make: 'testing seeds', model: 'test model', mileage: 1254, transmission: 'new', titleStatus: 'Clean'},
        {vin: 14586, make: 'testing truncate', model: 'another one', mileage: 1}
      ]);
    });
};
