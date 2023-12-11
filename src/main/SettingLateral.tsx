
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FC } from "react";
import { Text } from "react-native";
import PaginaUno from "./PaginaUno";
import PaginaDos from "./PaginaDos";
import PaginaTres from "./PaginaTres";

interface Props {}
const Drawer = createDrawerNavigator();

const SettingLateral: FC<Props> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="PaginaUno" component={PaginaUno} />
      <Drawer.Screen name="PaginaDos" component={PaginaDos} />
      <Drawer.Screen name="PaginaTres" component={PaginaTres} />

    </Drawer.Navigator>
  )
}

export default SettingLateral;