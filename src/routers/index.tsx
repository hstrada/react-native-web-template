import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['http://localhost*'],
        config: {
          screens: {
            Home: '/',
            Dashboard: 'dashboard',
          },
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
