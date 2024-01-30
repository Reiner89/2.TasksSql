import axios from "axios";

const apiUrl = "http://localhost:4000/tasks";

// Funcion para crear una tarea
export const createTaskRequest = async (task) => await axios.post(apiUrl, task);

// Funcion para obtener todas las tareas
export const getTasksRequest = async () => await axios.get(`${apiUrl}`);
