
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { FC } from "react";
import { Button, Text, TextInput } from "react-native";
import HomeTab from './HomeTab';

interface Props extends StackScreenProps<any, any> {}

const PaginaUno: FC<Props> = ({navigation}) => {
    const nav = useNavigation();
  return (
    <>
    <Text>de nuevo la PaginaUno</Text>
    <TextInput placeholder="ingrese sus datos"></TextInput>
    {/* navegacio con la extencion de la interface props */}
    <Button title="ver pagina tres" onPress={()=> navigation.navigate("PaginaTres", {id:5,"name":"jimmy","age":75})}/>

    {/* navegacion con la constante nav que se creo antes del return
    <Button title="ver pagina dos" onPress={()=> nav.navigate("PaginaDos" as never)}/>
    <Button title="ver pagina tres" onPress={()=> nav.navigate("PaginaTres" as never)}/> */}


    </>
  )
}

export default PaginaUno;