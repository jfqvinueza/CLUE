import { createStackNavigator } from '@react-navigation/stack';
import { FC, useContext } from "react";
import PaginaDos from './PaginaDos';
import PaginaUno from './PaginaUno';
import PaginaTres from './PaginaTres';
import { AuthContext } from './AuthContext';

interface Props {}
const Stack = createStackNavigator();

const StackNavigate:FC<Props> = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
            {isAuthenticated==false?(
        <Stack.Screen name="Login" component={Login} />
      ):(
        <Stack.Screen name="HomeTab" component={HomeTab} />
      )}
      <Stack.Screen name="Home" options={{title:"pagina de login"}} component={PaginaUno} />
      <Stack.Screen name="PaginaDos" options={{title:"pagina de pagina dos"}} component={PaginaDos} />
      <Stack.Screen name="PaginaTres" options={{title:"pagina tres"}} component={PaginaTres} />


    </Stack.Navigator>
  );
}
export default StackNavigate;