exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      desription: "best get this done 1",
      notes: "something idk 1",
      completed: false,
      project_id: 1
    },
    {
      desription: "best get this done 2",
      notes: "something idk 2",
      completed: false,
      project_id: 2
    },
    {
      desription: "best get this done 3",
      notes: "something idk 3",
      completed: false,
      project_id: 3
    }
  ]);
};
