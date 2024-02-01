// Importamos los componentes que necesitamos para el formulario
import { Formik, Form } from "formik";
import { useTask } from "../Context/TaskProvider";

// Importamos useParams
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export const TaskForm = () => {
  // Estado para guardar o cargar la tarea
  const [taskForm, setTaskForm] = useState({ title: "", description: "" });

  // Utilizamos la función useTask para crear una nueva Tarea
  const { createTask, getTask, updateTask } = useTask();

  // Guardamos en una constante a useParams
  const params = useParams();

  // Guardamos en una constante a useNavigate
  const navigate = useNavigate();

  // Creamos una funcion para traer los datos del backend al querer editar una tarea
  const getDataUpdate = async () => {
    if (params.id) {
      const task = await getTask(params.id);
      setTaskForm({
        title: task.title,
        description: task.description,
      });
    }
  };

  // Ejecutamos la función de arriba cuando se renderiza el componente
  useEffect(() => {
    getDataUpdate();
  }, []);

  return (
    <>
      <h1 className="">{params.id ? "Editar tarea" : "Crear tarea"}</h1>

      <Formik
        // Inicialimos los valores del formulario
        initialValues={taskForm}
        // Permitimos el reinicio de los campos del formulario
        enableReinitialize={true}
        // Funcion que se ejecuta cuando enviamos el formulario en bloque trycatch
        onSubmit={async (values) => {
          // Condicinamos si se actuliza o se crea un nuevo task
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
            navigate("/");
          }

          // Limpiamos los campos
          setTaskForm({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Título de la Tarea"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Descripción de la Tarea"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {params.id ? "Actualizar Tarea" : "Crear Nueva Tarea"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
