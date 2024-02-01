import { useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../Api/TaskApi";
import { TaskContext } from "./TaskContext";

// Crearemo un hoock para poder usar el TaskContext
export const useTask = () => {
  // Establezco la referencia al contexto y obtengo los valores del mismo
  const context = useContext(TaskContext);

  // Si no hay ningún valor definido en el contexto significa que no esta dentro del componente TaskContext.Provider
  if (!context) {
    throw new Error("No hay instancia de TaskProvider");
  }

  // Si no devuelvo los valores del contexto para que pueda ser importado
  return context;
};

// El TaskContext.Provider es el que se encarga de agrupar los componentes hijos y ofrecer la información a través del contexto.
// Este componente sirve para que cualquier componente que este dentro de este pueda acceder a los valores globales
export const TaskContextProvider = ({ children }) => {
  // Aquí van las variables o funciones que quiero compartir entre mis componentes
  // Estado para almacenar los tasks traidos del backend
  const [tasks, setTasks] = useState([]);

  // Funcion para traer mis Tasks del backend
  const LoadTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response.data);
  };

  // Funcion para eliminar el task
  const deleteTasks = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      LoadTasks();
    } catch (error) {
      console.log("Error al borrar la tarea: ", error);
    }
  };

  // Funcion para crear un task
  const createTask = async (values) => {
    try {
      // Guardamos nuestra peticion en una constante
      const response = await createTaskRequest(values);

      //  Agregamos el nuevo item a nuestro array de tareas
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para traer un task
  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error("Algo salio mal al traer los datos:", error);
    }
  };

  // Funcion para actualizar una task
  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
    } catch (error) {
      console.error("Algo salio mal al actualizar los datos:", error);
    }
  };

  // Funcion para actualizar el estado de la task
  const toggleTaskDone = async (id) => {
    try {
      // Primero obtenemos la task que queremos editar buscandolo por su id
      let taskFound = tasks.find((task) => task.id === id);

      // Ejecutamos la funcion toggleTaskDoneRequest con el campo "done" como true o false dependiendo del valor actual
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);

      LoadTasks();
    } catch (error) {
      console.error("Error al marcar como realizada/no realizada la tarea");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        LoadTasks,
        deleteTasks,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
