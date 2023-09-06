import React ,{ useState}from 'react';
import {View, Text, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import Background from '../../components/Background';
import Btn from '../../components/Buttons';
import Field from '../../components/Field';
import Checkbox from "expo-checkbox";






//import KeyboardAvoidingContaier from '../components/KeyboardAvoidingContainer';
const Signup = props => {
    const [isChecked, setIsChecked] = useState(false);
  return (
   
    <SafeAreaView style={{flex:1}}>
    <Background>
      
  <ScrollView style={{flex:1}}>
    {/*} <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === "ios"? "padding":"height"
    }
  keyboardVerticalOffset={0}>
  */}
        <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            top:20,
            color: '#080D3D',
            fontSize: 64,
            fontWeight: '500',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            top:15,
            color: '#080D3D',
            fontSize: 19,
           // fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View 
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="User Name" />
          <Field placeholder="Company Name" />
          <Field
            placeholder="Email "
            keyboardType={'email-address'}
          />
           
          <Field placeholder="Phone Number" keyboardType={'numeric'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
         {/*} <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>*/}
            <View style={{
                    flexDirection: 'row',
                    marginVertical: 6,
                   // alignItems:'center'
                    

                }}>
                    <Checkbox
                        style={{ marginRight: 8 ,
                        marginRight:90,
                        top:10
                    }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? '#080D3D' : undefined}
                    />
                   <View style={{ 
                    
                        marginRight:90,
                        top:10}}
                   >
                    <Text>I aggree to the </Text>
                    <Text style={{ fontWeight:'bold'

                    }}>
                        Terms and Conditions</Text>
                        </View>
                </View>
          {/*</View>*/}

          {/*<View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: '#080D3D', fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
        </View>*/}
        <View style={{
             alignItems:'center',
             marginRight:40,
             marginTop:50
        }}> 
          <Btn

            textColor="white"
            bgColor={'#080D3D'}
            btnLabel="Next"
            Press={() => {
              //alert('Account created');
              props.navigation.navigate("Signup1");
            }}
          />
          </View>
          <View
            style={{
                //top:60,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#080D3D', fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </View>
     
    {/*}  </KeyboardAvoidingView>*/}
      </ScrollView>
      
  
    </Background>
    </SafeAreaView>

  );
};

export default Signup;