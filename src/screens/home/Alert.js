import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/colors';

const Alert = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
      }}>
      <Text>Notification!</Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({});