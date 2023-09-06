import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
//import Background from '../assets/background.png';
/*import Button from '../components/Buttons';
import  COLORS  from '../constants/colors'*/

import Background from '../../components/Background';
import Btn from '../../components/Buttons';
//import { darkGreen, green } from '../constants/colors';
const Welcome = (props) => {
  return (
    <Background>
      <SafeAreaView>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'black', fontSize: 64 }}>Let's get</Text>
      <Text style={{ color: 'black', fontSize:50, marginBottom: 40 }}>Started</Text>
      <Btn bgColor={'#080D3D'} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={'#080D3D'} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Welcome;