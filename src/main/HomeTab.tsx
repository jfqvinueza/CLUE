
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { Text } from "react-native";
import PaginaDos from "./PaginaDos";
import PaginaTres from "./PaginaTres";
import PaginaUno from "./PaginaUno";
import StackNavigate from "./StackNavigate";

interface Props {}

const Tab = createBottomTabNavigator();

const HomeTab: FC<Props> = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="pagina uno" component={PaginaUno}/>
      <Tab.Screen name="Home" component={PaginaDos} />
      <Tab.Screen name="Settings" component={PaginaTres} />
      <Tab.Screen name="StackNavigate" component={StackNavigate} />

    </Tab.Navigator>
  )
}

export default HomeTab;