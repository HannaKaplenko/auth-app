import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './src/navigation/RootNavigation';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
  );
};
export default App;
