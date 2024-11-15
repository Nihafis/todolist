import { Router } from "express";
import { getTask, addTask, deleteTask,editTask } from "../controller/todoController.js";

const todoRoutes = Router();

todoRoutes.get("/tasks", getTask);
todoRoutes.post("/addtasks", addTask);
todoRoutes.put("/edittasks/:id", editTask);
todoRoutes.delete("/deletetasks/:id", deleteTask);
export default todoRoutes;
