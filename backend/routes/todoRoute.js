import { Router } from "express";
import { getTask, addTask, deleteTask } from "../controller/todoController.js";

const todoRoutes = Router();

todoRoutes.get("/tasks", getTask);
todoRoutes.post("/addtasks", addTask);
todoRoutes.delete("/deletetasks/:id", deleteTask);
export default todoRoutes;
