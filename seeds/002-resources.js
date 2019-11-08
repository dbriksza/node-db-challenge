exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "resource 1", description: "does something I'm sure 1" },
    { name: "resource 2", description: "does something I'm sure 2" },
    { name: "resource 3", description: "does something I'm sure 3" }
  ]);
};
