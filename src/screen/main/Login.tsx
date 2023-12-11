import { useNavigation } from '@react-navigation/native'
import { FC, useContext } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import { useForm, SubmitHandler } from "react-hook-form"
import { useBasicAuth } from '../../hooks/useBasicAuth'
import { AuthContext } from './AuthContext'
import { Input } from '../../components/Input'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Background } from '../../components/Background'

interface Props {

}

export const Login:FC <Props> = () => {

  const { handleSubmit, register, getValues, control } = useForm();

  const { signIn } = useContext(AuthContext);


  const onSubmit = async () => {
        const { token } = await useBasicAuth(getValues("username"), getValues("password"))
        
        if (token){
          AsyncStorage.setItem("token",token)
          signIn();
          
        }
  }

 return (
  <>
    
      <View style={{flex: 1,flexGrow: 1,justifyContent: 'center',}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Text style={{fontWeight: 'bold',textAlign: 'center',}}>Bienvenida</Text>
            <Text>Usuario:</Text>
            <Input name='username' label='Ingrese su usuario' control={control} />
            <Text>Password:</Text>
            <Input name="password" label='Su contraseña' control={control} />
            <Button 
              title='Login'
              onPress={handleSubmit(onSubmit)}
            />
        </ScrollView>

        

      </View>
  
  </>


 )
}