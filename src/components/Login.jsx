import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleLogin = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    // Lógica de autenticación...
    // Si la autenticación es exitosa, redirigir al usuario a la página deseada
    navigate("/home"); // Cambiar '/home' por la ruta a la que quieras redirigir al usuario
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl mb-10">Inicia Sesión</h2>
        <form className="mb-20" onSubmit={handleLogin}>
          {/* Utiliza onSubmit para manejar el envío del formulario */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Usuario"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-green-600"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-bold py-2 px-28 rounded-xl focus:outline-none focus:bg-green-800"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
