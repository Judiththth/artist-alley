import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import supabase from '@/lib/supabase'
import { useRouter } from 'expo-router'

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const toLogin = () => {
        router.push('/login')
    }

    const handleSignup = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name,
                    },
                },
            })
            if (error) {
                console.error('Error al crear cuenta:', error.message)
            } else {
                console.log('Cuenta creada:', data.user)
                router.replace('/login')
            }
        } catch (error) {
            console.error('Error al crear cuenta:', error)
        }
    }

    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-2xl font-bold mb-4'>Crear cuenta</Text>
            <Text> Nombre de usuario </Text>
            <TextInput onChangeText={setName}
                value={name}
                className='w-3/4 h-10 border border-gray-300 rounded-md px-2 mb-4'
                placeholder='Ingresa tu nombre de usuario' />
            <Text> Email </Text>
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

            <TouchableOpacity onPress={handleSignup}
                className='w-3/4 h-10 bg-purple-500 rounded-md items-center justify-center mb-4'>
                <Text className='text-white font-bold'>Crear cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toLogin}>
                <Text className='text-purple-500'>¿Ya tienes una cuenta? Inicia sesión</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Signup