/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { Text } from "react-native";
import StackNavigate from './src/main/StackNavigate';
import HomeTab from './src/main/HomeTab';
import SettingLateral from './src/main/SettingLateral';
import { AuthProvider } from './src/main/AuthContext';
import { MainStack } from './src/screen/main/MainStack';

interface Props {}

const App: FC<Props> = () => {

  // const MyTheme = {
  //     DefaultTheme,
  //   colors: {
  //       DefaultTheme.colors,
  //     primary: 'rgb(255, 45, 85)',
  //   },
  // };

  return (
    <>
    <NavigationContainer>
      <AuthProvider>
        <MainStack/>
      </AuthProvider>
      
    </NavigationContainer>
   </>
    // <>
    // <Text>de nuevo la app</Text>
    // <NavigationContainer theme={DarkTheme}>
    // <AuthProvider>
    //   <StackNavigate/>
    // </AuthProvider>
    //   {/* estos son tipos de navegacion */}
    //   {/* <HomeTab/> */}
    //   {/* <SettingLateral/> */}

    // </NavigationContainer>
    // </>
  )
}

export default App;