const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const project = require("./project-model");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const port = 4040;

server.listen(port, () =>
  console.log(`\n[[[ server listening on ${port} ]]]\n`)
);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Business Project API or something" });
});

server.get("/api/projects", (req, res) => {
  project
    .getProjects()
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});

server.get("/api/projects/:id", (req, res) => {
  project
    .getProjects(req.params.id)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.get("/api/projects/:id/tasks", (req, res) => {
  project
    .getTasks(req.params.id)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.get("/api/projects/:id/resources", (req, res) => {
  project
    .getTasks(req.params.id)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.post("/api/projects", (req, res) => {
  project
    .insertProject()
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.post("/api/tasks", (req, res) => {
  project
    .insertTask()
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.post("/api/resources", (req, res) => {
  project
    .insertResource()
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.put("/api/projects/:id", (req, res) => {
  project
    .updateProject(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.put("/api/tasks/:id", (req, res) => {
  project
    .updateTask(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.put("/api/resources/:id", (req, res) => {
  project
    .updateResource(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.delete("/api/projects/:id", (req, res) => {
  project
    .removeProject(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.delete("/api/tasks/:id", (req, res) => {
  project
    .removeTask(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
server.delete("/api/resources/:id", (req, res) => {
  project
    .removeRecource(req.params.id, req.body)
    .then(db => {
      res.status(200).json(db);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "I really hope I don't see this message" });
    });
});
