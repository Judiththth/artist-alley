/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // Especifica los archivos donde Tailwind CSS debe buscar clases para generar estilos
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [require("nativewind/tailwind/css")], // Agrega el plugin de NativeWind para usar Tailwind CSS en React Native
}

