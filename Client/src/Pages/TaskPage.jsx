import React, { useEffect } from "react";
import { TaskCard } from "../Components/TaskCard";
import { useTask } from "../Context/TaskProvider";

export const TaskPage = () => {
  // De mi customHoock traje los valores que hibamos a usar
  const { tasks, LoadTasks } = useTask();

  useEffect(() => {
    LoadTasks();
  }, []);

  // Funcion para mostrar mensaje si aun no hay tareas
  const renderMain = () => {
    if (tasks.length === 0) return <h1 className= "text-white">¡No has creado ninguna tarea!</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <>
      <h1 className="text-white">Lista de Todas las Tareas</h1>
      {renderMain()}
    </>
  );
};
