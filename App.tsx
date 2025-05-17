import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {Products} from './src/modules/productsList';
import { View } from 'react-native';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
  );
};
export default App;
