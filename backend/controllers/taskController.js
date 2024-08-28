const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, tasks) => {
    if (err) res.status(500).send(err);
    res.json(tasks);
  });
};

exports.createTask = (req, res) => {
  const newTask = req.body;
  Task.create(newTask, (err, result) => {
    if (err) res.status(500).send(err);
    res.status(201).json(result);
  });
};

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  Task.update(id, updatedTask, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
  });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.delete(id, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
  });
};
