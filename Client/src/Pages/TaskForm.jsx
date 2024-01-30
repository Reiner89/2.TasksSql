// Importamos los componentes que necesitamos para el formulario
import { Formik, Form } from "formik";
// Importamos nuestra funcion para mandar nuestro formulario al backend
import { createTaskRequest } from "../Api/TaskApi";

export const TaskForm = () => {
  return (
    <>
      <Formik
        // Inicialimos los valores del formulario
        initialValues={{
          title: "",
          description: "",
        }}
        // Funcion que se ejecuta cuando enviamos el formulario en bloque trycatch
        onSubmit={async (values, actions) => {
          try {
            // Guardamos nuestra peticion en una constante
            const response = await createTaskRequest(values);
            // Mostramos el estado de esta peticion en consola
            console.log(response);
            // Limpiamos los campos
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
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
              {isSubmitting ? "Cargando..." : "Crear Tarea"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
