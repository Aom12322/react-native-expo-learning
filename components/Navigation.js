import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import CounterScreen from '../pages/CounterScreen';
import ListManagerScreen from '../pages/ListManagerScreen';
import FlexboxManagerScreen from '../pages/FlexboxManagerScreen';
import StyleExample from '../pages/StyleExample';
import LayoutExampleScreen from '../pages/LayoutExampleScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} /> 
      <Stack.Screen name="ListManager" component={ListManagerScreen} /> 
      <Stack.Screen name="FlexboxManager" component={FlexboxManagerScreen} /> 
      <Stack.Screen name="StyleExample" component={StyleExample} /> 
      <Stack.Screen name="LayoutExampleScreen" component={LayoutExampleScreen} /> 
    </Stack.Navigator>
  );
}