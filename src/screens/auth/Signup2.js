import React ,{ useState}from 'react';
import {View, Text, Touchable, TouchableOpacity,ScrollView} from 'react-native';
import Background from './Background';
import Btn from '../components/Buttons';
import {launchImageLibrary} from 'react-native-image-picker';
const Signup2 = props => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImagePicker = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
   
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
     } 
     return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
     {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
    )}
        <View style={{paddingTop:20}}>
            <Btn
            
          
            textColor="white"
            bgColor={'#080D3D'}
            btnLabel="Choose file"
            onPress={() => {openImagePicker} } />

        
            </View>
            </View>
    );
}
  export default Signup2;