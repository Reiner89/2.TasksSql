import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import tasksRoutes from "./Routes/tasks.routes.js";

// Almacenamos express en una constante para usarlo
const app = express();

// Usamos cors para permitir las solicitudes de diferentes orígenes (por defecto se bloquean)
app.use(cors());
// Procesamos los datos enviados del cliente como Json
app.use(express.json());

// Añadimos nuestra ruta creada desde routes
app.use(tasksRoutes);

// Usamos app y le decimos el puerto en el que se debe ejecutar
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
