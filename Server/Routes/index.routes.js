// Importo "Router" para crear multiples rutas
import { Router } from "express";
// Importo mi coneccion a mi base de datos
import { Pool } from "../db.js";

// Guardamos en una contante la funcion "Router" para ser usada
const router = Router();

//  Creando el metodo GET y le asignamos una función anonima que se ejecuta cuando se realiza una peticion HTTP GET a /api/
router.get("/ping", async (req, res) => {
  // Ejecutamos una query  sencilla para verificar que todo funcione correctamente que devuelve "rows"
  const [rows] = await Pool.query("select 1 + 1 as result");

  // Lo mostramos en consola
  console.log(rows);

  // Retornamos el resultado como JSON
  res.json(rows);
});

// Todo esto lo exportamos
export default router;
