exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "project1",
      description: "some project to do something 1",
      completed: false
    },
    {
      name: "project2",
      description: "some project to do something 2",
      completed: false
    },
    {
      name: "project3",
      description: "some project to do something 3",
      completed: false
    }
  ]);
};
