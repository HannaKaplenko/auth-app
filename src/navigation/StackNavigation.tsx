import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationScreen } from '../modules/authorization';
const Stack = createStackNavigator ();

export const StackNavigation = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="AuthorizationScreen" component={AuthorizationScreen} />

    </Stack.Navigator>
  );
}


