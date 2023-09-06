import { View, Text,  TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import PageContainer from '../components/PageContainer'
//import { COLORS, FONTS, SIZES, images } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
//import Input from '../components/Input'
//import Button from '../components/Button'
//import { reducer } from '../utils/reducers/formReducers'
//import { validateInput } from '../utils/actions/formActions'
import Btn from '../../components/Buttons'

/*const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}
*/
const ResetPassword = ({ navigation }) => {
   /* const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )
*/
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 22,
                        alignItems: 'center',
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{  color: '#080D3D' }}>
                            Reset
                        </Text>
                        <Text
                            style={{
                               
                                color:'black',
                                marginHorizontal: 8,
                            }}
                        >
                            Your
                        </Text>
                        <Text style={{  color: '#080D3D'}}>
                            Password
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Input
                            icon="email"
                            iconPack={MaterialIcons}
                            id="email"
                           // onInputChanged={inputChangedHandler}
                            //errorText={formState.inputValidities['email']}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                        />
                    </View>
                    <Text
                        style={{
                            
                            textAlign: 'center',
                            marginVertical: 14,
                        }}
                    >
                        Your password reset will be sent in your registered
                        email
                    </Text>
                    <Btn textColor='white' bgColor={'#080D3D'} btnLabel="SEND" Press={() => {
            
                          props.navigation.navigate("OTPVerification");
                                }} />
        
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text
                            style={{
                                
                                color:'#080D3D',
                                marginVertical: 12,
                            }}
                        >
                            Remember Password!
                        </Text>
                    </TouchableOpacity>
                </View>
            
        </SafeAreaView>
    )
}

export default ResetPassword