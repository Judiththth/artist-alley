import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const Login = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
    <Text className='text-2xl font-bold mb-4'>Iniciar sesión</Text>
    <Text> Usuario/email </Text>
    <TextInput className='w-3/4 h-10 border border-gray-300 rounded-md px-2 mb-4' placeholder='Ingresa tu usuario o email' />
    <Text> Contraseña </Text>
    <TextInput className='w-3/4 h-10 border border-gray-300 rounded-md px-2 mb-4' placeholder='Ingresa tu contraseña' secureTextEntry />
    <TouchableOpacity className='w-3/4 h-10 bg-purple-500 rounded-md items-center justify-center mb-4'>
      <Text className='text-white font-bold'>Iniciar sesión</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className='text-purple-500'>¿Olvidaste tu contraseña?</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Login