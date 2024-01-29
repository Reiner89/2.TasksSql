// Importamos pool para insertar estos datos en una tabla
import { Pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    // Mostraremos todas la tareas de nuestra tabla tasks
    const [result] = await Pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );

    // Muestro las tareas por JSON
    res.json(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    // Mostraremos la tarea con el id pasada de la url
    const [result] = await Pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    // Si el arreglo result es vacío significa que no existe esa tarea, por lo tanto devolveremos un status 400 de error
    if (result.length === 0) {
      return res.status(404).send({ message: "La tarea no existe" });
    }

    // Muestro la tarea en formato Json
    res.json(result[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    // Extraemos los datos enviados
    const { title, description } = req.body;

    // Insertamos los datos en nuestra tabla tasks y lo almacenamos en una constante con [] porque el result es un arreglo
    const [result] = await Pool.query(
      "INSERT INTO tasks(title,description) VALUES (?, ?)",
      [title, description]
    );

    // Mostramos en formato Json estos datos y el id
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await Pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    // Mostramos el resultado en formato Json
    res.json(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    // Eliminamos una tarea con el id indicado
    const [result] = await Pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    // Si no ha sido encontrada ninguna tarea con el id se botara un error
    if (result.affectedRows == 0) {
      return res
        .status(404)
        .json({ message: "No se ha eliminado ninguna tarea" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
