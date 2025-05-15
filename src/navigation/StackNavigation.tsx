import {createStackNavigator} from '@react-navigation/stack';
import {AuthorizationScreen} from '../modules/authorization';
import {ProductsList} from '../modules/Products list';
const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorizationScreen"
        component={AuthorizationScreen}
        options={{title: "Main page"}}
      />
      <Stack.Screen name="ProductsList" component={ProductsList} />
    </Stack.Navigator>
  );
};
