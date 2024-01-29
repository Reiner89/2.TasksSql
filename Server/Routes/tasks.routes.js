import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../Controllers/tasks.controllers.js";

const router = Router();

// Ruta para listar los task
router.get("/tasks", getTasks);

// Ruta para listar mediante un id
router.get("/tasks/:id", getTask);

// Ruta para crear un task
router.post("/tasks", createTask);

// Ruta para editar un task mediante un id
router.put("/tasks/:id", updateTask);

// Ruta para eliminar un task
router.delete("/tasks/:id", deleteTask);

export default router;
