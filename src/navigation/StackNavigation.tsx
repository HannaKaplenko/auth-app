import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationScreen } from '../modules/authorization';
import { ProductsList } from '../modules/productsList';
// import {ProductView} from "../modules/product";
const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorizationScreen"
        component={AuthorizationScreen}
        options={{ title: "Main page" }}
      />
      <Stack.Screen name="Products List" component={ProductsList} />
    </Stack.Navigator>
  );
};
