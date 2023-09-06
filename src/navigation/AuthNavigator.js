import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, HomeScreen, Signup,Welcome,OTPVerification,Signup1,Signup2} from '../screens';
import {COLORS, ROUTES} from '../constants';
import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator 
    screenOptions={{}} initialRouteName={ROUTES.WELCOME}>
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={Welcome}
        options={{headerShown: false}}

      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.SIGNUP} component={Signup} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.SIGNUP1} component={Signup1} options={{headerShown: false}} />
      <Stack.Screen name={ROUTES.SIGNUP2} component={Signup2} options={{headerShown: false}} />
      <Stack.Screen
        name={ROUTES.OTPVERIFICATION}
        component={OTPVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.HOMESCREEN } component={BottomTabNav}  options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;