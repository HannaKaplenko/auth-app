

import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {Products} from './src/modules/Products list';
import { View} from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {


return (
  // <NavigationContainer>
<View style={{ flex: 1 }}>
  <RootNavigation/> 
  </View>
  // </NavigationContainer>
   );
};

export default App;