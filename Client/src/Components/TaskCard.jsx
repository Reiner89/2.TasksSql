export const TaskCard = ({ task }) => {
  return (
    <div className="">
      <h2 className="">{task.title}</h2>
      <p className="">{task.description}</p>
      <p className="">{task.done === 1 ? "Hecha" : "Pendiente"}</p>
      <p className="">{task.createAt}</p>
      <button className="">Delete</button>
      <button className="">Editar</button>
    </div>
  );
};
