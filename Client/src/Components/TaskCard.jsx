import { useTask } from "../Context/TaskProvider";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  // Traemos la funcion de nuestro customHook
  const { deleteTasks, toggleTaskDone } = useTask();

  // Guardamos useNavigate en una constante
  const navigate = useNavigate();

  // Funcion que cambiara el estado del task
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="relative w-full flex flex-col">
      <h2 className="">{task.title}</h2>
      <p className="">{task.description}</p>
      <p className="">{task.done === 1 ? "Hecha" : "Pendiente"}</p>
      <p className="">{task.createAt}</p>
      <div className="relative flex">
        <button
          type="button"
          className="relative my-1 mx-1 bg-red-500 p-1 text-white rounded-[10%]"
          onClick={() => deleteTasks(task.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="relative my-1 mx-1 bg-blue-500 p-1 text-white rounded-[10%]"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="relative my-1 mx-1 bg-green-500 p-1 text-white rounded-[10%]"
          onClick={handleDone}
        >
          Cambiar Estado
        </button>
      </div>
    </div>
  );
};
