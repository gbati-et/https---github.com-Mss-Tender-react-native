import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView,ScrollView} from 'react-native';
import Background from '../../components/Background';
import Btn from '../../components/Buttons';
import Field from '../../components/Field';
import {useNavigation} from '@react-navigation/native';
//import { form } from '../constants/style';
//import KeyboardAvoidingContaier from '../components/KeyboardAvoidingContainer';
//import { useCallback , useReducer } from 'react';


import { useState } from 'react';
/*const initialState = {
  inputValidities: {
      email: false,
      password: false,
  },
  formIsValid: false,
}*/

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [message, setMessage] = useState("");

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    let re = /[0-9]+/;
    return re.test(password);
  };

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setMessage("Fill in all fields");
    } else if (!validateEmail(email)) {
      setMessage("Only valid email addresses are accepted");
    } else if (password.length <= 10) {
      setMessage("Password should have more than 10 characters");
    } else if (!validatePassword(password)) {
      setMessage("Password should include numbers");
    } else {
      setMessage("");
      setPassword("");
      setEmail("");
      navigation.navigate("Home");
    }
  };
/*  const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )*/
     //const {navigation} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
    <Background>
      {/*<KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === "ios"? "padding":"height"
    }
  keyboardVerticalOffset={0}>*/}
  <ScrollView>
    
        
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: '#080D3D',
            top: 20,
            fontSize: 80,
            fontWeight:'500',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: '#080D3D', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: '#080D3D',
              fontSize: 19,
             // fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          <Field
           onChangeText={value => setEmail(value)}
            placeholder="Email "
            keyboardType={'email-address'}
          />
          <Field 
          onChangeText={value => setPassword(value)}
          placeholder="Password" secureTextEntry={true} />
                       
          <View
            style={{ top:20, alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
                <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPassword')}
                    >
                        <Text
                           style={{color: '#080D3D', fontWeight: 'bold', fontSize: 16}}   
                        >
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>
           
        
          </View>
            <Btn onPress={handleSubmit} textColor='white' bgColor={'#080D3D'} btnLabel="Login" Press={() => {
              //alert('Account loggedin');
              props.navigation.navigate("HomeScreen");
            }} />
        
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16 }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#080D3D', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
      {/*</KeyboardAvoidingView >*/}
  
      
    </Background>
    </SafeAreaView>
  );
};

export default Login;