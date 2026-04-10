// Metro es el bundler de React Native, el equivalente a Webpack o Vite que usaba en Fiesti.
// Toma todos los archivos y los convierte en algo que el móvil puede ejecutar.
// Este archivo le dice a Metro que procese también los estilos de NativeWind,
// para que cuando vea className='bg-purple-500' en tu código sepa qué hacer con ello.

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });