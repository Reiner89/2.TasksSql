// Configuramos la coneccion a la bd de mysql

// Importamos createPoll de mysql2 como promise
import { createPool } from "mysql2/promise";

// Lo guardo en una constante y creo mi coneccion
export const Pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "davidReiner123",
  database: "taskdb"
});