import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientScreen from './screens/ClientScreen';
import FormClientScreen from './screens/FormClientScreen';
import HomeScreen from './screens/HomeScreen';
import SalesScreen from './screens/SalesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='CreateClient'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CreateClient' component={FormClientScreen} options={{
        headerTitle: 'Clientes'
      }} />
      <Stack.Screen
        name="Tabs"
        component={TabsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sales" component={SalesScreen} />
      <Tab.Screen name="Client" component={ClientScreen} />
    </Tab.Navigator>
  )
}