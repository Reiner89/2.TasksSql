import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../Api/TaskApi";
import { TaskCard } from "../Components/TaskCard";

export const TaskPage = () => {
  // Estado para almacenar los tasks traidos del backend
  const [tasks, setTasks] = useState([]);

  // Funcion para traer mis Tasks del backend
  const LoadTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response.data);
  };

  useEffect(() => {
    LoadTasks();
  }, []);

  return (
    <>
      <h1 className="">Lista de Todas las Tareas</h1>
      {tasks.map((task) => (
        <>
          <TaskCard task={task} key={task.id} />
        </>
      ))}
    </>
  );
};
