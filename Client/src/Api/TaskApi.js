import axios from "axios";

const apiUrl = "http://localhost:4000/tasks";

// Funcion para crear una tarea
export const createTaskRequest = async (task) => await axios.post(apiUrl, task);

// Funcion para obtener todas las tareas
export const getTasksRequest = async () => await axios.get(`${apiUrl}`);

// Funcion para eliminar una tarea
export const deleteTaskRequest = async (id) =>
  await axios.delete(`${apiUrl}/${id}`);

// Funcion para traer una tarea
export const getTaskRequest = async (id) => await axios.get(`${apiUrl}/${id}`);

// Funcion para actualizar una tarea
export const updateTaskRequest = async (id, newFields) => {
  return await axios.put(`${apiUrl}/${id}`, newFields);
};

// Funcion para cambiar el estado de la tarea a completada o no
export const toggleTaskDoneRequest = async (id, done) => {
  return await axios.put(`${apiUrl}/${id}`, {
    done,
  });
};
