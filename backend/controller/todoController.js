import Task from "../model/todoModel.js";

export const getTask = (req, res, next) => {
  try {
    Task.getTasks((err, tasks) => {
      if (err) {
        return res.status(500).send({ message: "Error retrieving tasks" });
      }
      return res.status(200).json({
        data: {
          tasks,
          record: tasks.length,
        },
      });
    });
  } catch (error) {
    console.log({ err });
    return res.status(500).send("Internal Server Error.");
  }
};
export const editTask = (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);

    if (!id) {
      return res.status(400).send({ message: "Task ID is required" });
    }

    const { title } = req.body;
    if (!title) {
      return res.status(400).send({ message: "Task title is required" });
    }

    if (title) {
      const editedTask = {
        id,
        title,
      }
      Task.editTasks(editedTask, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error2." + err);
        }
        return res.status(200).json({ message: "Task updated successfully" });
      });
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error" + error)
  }
}

export const addTask = (req, res, next) => {
  try {
    const { title } = req.body;

    if (title) {
      const addTask = {
        title,
      };
      // console.log(task);
      Task.addTask(addTask, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error2." + err);
        }
        return res
          .status(201)
          .json({ message: "Task created successfully", task: result });
      });
    } else {
      return res.status(400).send({ message: "Task title is required" });
    }

    //
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
};


export const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);

    Task.deleteTask(id, (err, result) => {
      if (err) {
        // console.log(err);
        return res.status(500).send("Internal Server Error2." + err);
      }
      if (result.affectedRows === 0) {
        return res.status(404).send({ message: "Task not found" });
      }
      return res.status(200).send({ message: "Task deleted successfully" });
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send("Internal Server Error.");
  }
}

// export default async function addTask(req, res, next) {
//     app.post("/tasks", (req, res) => {
//         const { title } = req.body;
//         db.query(
//           "INSERT INTO tasks (title) VALUES (?)",
//           [title],
//           (err, results) => {
//             if (err) throw err;
//             res.json({ id: results.insertId, title });
//           }
//         );
//       });
// }
