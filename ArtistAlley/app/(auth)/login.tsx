import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import supabase from '@/lib/supabase'
import { useRouter } from 'expo-router'


const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        console.error('Error al iniciar sesión:', error.message)
      } else {
        console.log('Usuario autenticado:', data.user)
        router.replace('/home')
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  const toSignup = () => {
    router.push('/(auth)/signup')
  }

  return (
    <View className='flex-1 items-center justify-center bg-white'>
    <Text className='text-2xl font-bold mb-4'>Iniciar sesión</Text>
    <Text> Usuario/email </Text>
    <TextInput onChangeText={setEmail} 
    value={email}
    className='w-3/4 h-10 border border-gray-300 rounded-md px-2 mb-4' 
    placeholder='Ingresa tu usuario o email' />
    <Text> Contraseña </Text>
    <TextInput onChangeText={setPassword} 
    value={password}
    className='w-3/4 h-10 border border-gray-300 rounded-md px-2 mb-4' 
    placeholder='Ingresa tu contraseña' secureTextEntry />

    {/* --------------------BOTONES-------------------- */}
    <TouchableOpacity onPress={handleLogin} 
    className='w-3/4 h-10 bg-purple-500 rounded-md items-center justify-center mb-4'> 
      <Text className='text-white font-bold'>Iniciar sesión</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={toSignup}>
      <Text className='text-purple-500'>Crear cuenta</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text className='text-purple-500'>¿Has olvidado tu contraseña?</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Login