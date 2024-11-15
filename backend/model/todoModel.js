import db from "../config/db.js";

const Task = {
  getTasks: (result) => {
    db.query("SELECT * FROM tasks", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      // console.log("tasks : ", res);
      result(null, res);
    });
  },

  addTask: (task, result) => {
    db.query("INSERT INTO tasks SET ?", task, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created task: ", { id: res.insertId, ...task });
      result(null, { id: res.insertId, ...task });
    });
  },

  deleteTask: (task, result) => {
    db.query("DELETE FROM tasks WHERE id = ?", task, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log(task);
      
      console.log("deleted task with id: ", task);
      result(null, res);
    });
  },
};

export default Task;
