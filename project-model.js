const db = require("./data/db-config");

module.exports = {
  getProjects,
  getTasks,
  getResources,
  insertProject,
  updateProject,
  removeProject,
  insertTask,
  updateTask,
  removeTask,
  insertResource,
  updateResource,
  removeResource
};

function getProjects() {
  //   if (id === null) {
  return db("projects");
  //   } else {
  //     return db("projects").where("project_id", "=", id);
  //   }
}

function getTasks(project_id) {
  return db("tasks as ri")
    .join("tasks as i", "i.id", "ri.id")
    .join("projects as r", "r.id", "ri.id")
    .where("ri.project_id", "=", project_id)
    .select("i.desription", "i.notes", "i.completed");
}

function getResources(project_id) {
  if (project_id === null) {
    return db("resources");
  } else {
    return db("resources as ri")
      .join("resources as i", "i.id", "ri.id")
      .join("projects as r", "r.id", "ri.id")
      .where("ri.project_id", "=", project_id)
      .select("i.resource_name", "i.desription");
  }
}

function insertProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function updateProject(id, changes) {
  return db("projects")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function removeProject(id) {
  return db("projects")
    .where("id", id)
    .del();
}
function insertTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => this.get(id));
}

function updateTask(id, changes) {
  return db("tasks")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function removeTask(id) {
  return db("tasks")
    .where("id", id)
    .del();
}
function insertResource(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => this.get(id));
}

function updateResource(id, changes) {
  return db("resources")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function removeResource(id) {
  return db("resources")
    .where("id", id)
    .del();
}
