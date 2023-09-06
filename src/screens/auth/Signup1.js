import React ,{ useState}from 'react';
import {View, Text, Touchable, TouchableOpacity,ScrollView,Image} from 'react-native';
import Background from './Background';
import Btn from '../components/Buttons';
import Field from './Field';
import ImagePicker from 'react-native-image-picker';



const Signup1 = props => {
    
    const [selectedImage, setSelectedImage] = useState(null);

  const chooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          // Handle the selected image
          setSelectedImage({ uri: response.uri });
        }
      });
    };

   
  return (
    
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            top:20,
            color: '#080D3D',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            top:10,
            color: '#080D3D',
            fontSize: 19,
           // fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Create a Company account
        </Text>
        <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            alignItems: 'center',
        
          }}>
            
           
          <Field placeholder="Company Name" />
          <Field placeholder="Location" />
          <Field
            placeholder="Description"
            
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Text>Enter company log</Text>
          <View>
      {selectedImage && (
        <Image
          source={selectedImage}
          style={{ width: 200, height: 200 }}
        />
      )}
      <TouchableOpacity onPress={chooseImage}>
        <Text>Select an Image</Text>
      </TouchableOpacity>
    </View>

          <Text>Enter promotion image</Text>
         
            <View style={{paddingTop:20}}>
            <Btn
            
          
            textColor="white"
            bgColor={'#080D3D'}
            btnLabel="Next"
            Press={() => {
            
              props.navigation.navigate('Signup3');
            }}
            />
            </View>
            <View
            style={{
                top:20,
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
            

        </ScrollView>
      </View>
    </Background>
 
  );
};

export default Signup1;