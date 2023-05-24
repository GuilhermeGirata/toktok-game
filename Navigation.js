import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Jogo from './Jogo';
import End from './End';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="End" component={End} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
