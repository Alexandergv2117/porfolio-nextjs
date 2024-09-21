'use client';

import { useEffect, useState } from "react";

export default function SwitchMode() {
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  // Efecto para agregar o quitar la clase "dark" según el estado de darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      {/* Checkbox que alterna el modo oscuro */}
      <input
        type="checkbox"
        checked={darkMode}
        className="sr-only peer"
        onChange={toggleDarkMode} // Cambia el valor del estado al marcar/desmarcar
      />
      {/* Estilos del switch */}
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black/70"></div>
    </label>
  );
}
