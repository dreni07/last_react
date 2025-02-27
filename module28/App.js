import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ApiScreen from './screens/ApiScreen';
import Home from './screens/Home';
import Settings from './screens/Settings';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="ApiScreen" component={ApiScreen}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

