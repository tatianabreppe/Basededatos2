/*import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const port = 3060;

app.use(cors());
app.use(express.json());

// Ruta para registrar usuarios
app.post("/registrar", async (req, res) => {
  const { nombre, email  } = req.body;

  try {
    const conexion = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "mi_app"
    });

    await conexion.execute(
      "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email]
    );

    await conexion.end();

    res.json({ mensaje: "✅ Usuario registrado con éxito." });
  } catch (error) {
    console.error("Error al registrar:", error);
    res.status(500).json({ mensaje: "❌ Error al registrar usuario." });
  }
});

app.listen(port, ()=> console.log('Servidor corriendo en https://localhost:3060'));*/

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const port = 3060;

app.use(cors());
app.use(express.json());

// ✅ Ruta principal para probar desde el navegador
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// ✅ Ruta para registrar usuarios
app.post("/registrar", async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const conexion = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "mi_app"
    });

    await conexion.execute(
      "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email, password]
    );

    await conexion.end();

    res.json({ mensaje: "✅ Usuario registrado con éxito." });
  } catch (error) {
    console.error("Error al registrar:", error);
    res.status(500).json({ mensaje: "❌ Error al registrar usuario." });
  }
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
