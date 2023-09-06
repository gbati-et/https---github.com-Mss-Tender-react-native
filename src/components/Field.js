import React from 'react';
import {TextInput} from 'react-native';
//import {darkGreen} from './Constants';

const Field = props => {
 {/* const onChangeText = (text) => {
    props.onInputChanged(props.id, text)
}
*/}
  return (
    <TextInput
      {...props}
      //onChangeText={onChangeText}
      style={{
        top:20,
        borderRadius: 100,
         color: '#080D3D', 
      paddingHorizontal: 20, 
      width: '90%', 
      height:48,
      backgroundColor: '#F6F5FA', 
      marginVertical: 10  ,

    }}
      placeholderTextColor={'#080D3D'}>

      </TextInput>
  );
};

export default Field;