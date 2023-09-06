import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/AuthNavigator';

const Stack = createNativeStackNavigator();


function App() {

  return (
    
      <NavigationContainer >
             <AuthNavigator />
    </NavigationContainer>

  )
}

export default App;