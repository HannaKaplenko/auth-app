

import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {Products} from './src/home';
import { View} from 'react-native';

const App = () => {


return (
  // <NavigationContainer>
<View style={{ flex: 1 }}>
  <Products /> 
  </View>
  // </NavigationContainer>
   );
};

export default App;