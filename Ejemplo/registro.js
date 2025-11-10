document.getElementById("form-registro").addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que se recargue la página

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const respuesta = await fetch("http://localhost:3060/registrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password })
    });

    const resultado = await respuesta.json();
    document.getElementById("mensaje").textContent = resultado.mensaje;

  } catch (error) {
    console.error("Error al registrar:", error);
    document.getElementById("mensaje").textContent = "Error al conectar con el servidor.";
  }
});
