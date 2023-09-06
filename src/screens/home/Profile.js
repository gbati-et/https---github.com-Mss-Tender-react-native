import React from 'react';
import {Text, View,SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import COLORS from '../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import{MaterialCommunityIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Header } from 'react-native/Libraries/NewAppScreen';



const Profile = ({ navigation }) => {
  const navigateToEditProfile = (navigation) => {
    navigation.navigate("EditProfile");
  };
  const navigateToLanguage = () => {
    console.log("Language function");
  };
  const navigateToNotifications = () => {
    console.log("Notifications function");
  };
  const navigateToPrivacy = () => {
    console.log("Privacy function");
  };
  const navigateToFAQ = () => {
    console.log("FAQ function");
  };
  const navigateToFeedback = () => {
    console.log("Feedback function");
  };
  
  const logout = () => {
    console.log("Logout");
  };

  const accountItems = [
    {
      icon: "account-edit",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    { icon: "web", text: "Change language", action: navigateToLanguage },
    {
      icon: "share",
      text: "Share",
      action: navigateToNotifications,
    },
    { icon: "lock-outline", 
    text: "Privacy", 
    action: navigateToPrivacy },
    {
      icon: "frequently-asked-questions",
      text: "FAQ",
      action: navigateToFAQ,
    },
    {
      icon: "comment-quote",
      text: "Feedback",
      action: navigateToFeedback,
    },
    { icon: "logout", text: "Log out", action: logout },
    
  ];

  const renderProfileItem = ({ icon,text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.white,
      }}
    >
  {/*  <MaterialIcons name={icon} size={24} color="black" /> */}
  <MaterialCommunityIcons name={icon} size={24} color="black"/>
    
    <Text
      style={{
        marginLeft: 36,
        fontWeight: 600,
        fontSize: 16,
      }}
    >
      {text}{" "}
    </Text>
  </TouchableOpacity>
);
  return (

    <SafeAreaView
      style={{
       
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
           
            marginTop:30,
            position: "absolute",
            right: 0,
          }}
        >
        
        </TouchableOpacity>

      
                        </View>
                       <ScrollView style={{ marginHorizontal: 12 }}>
                      
        
        <View style={{ marginBottom: 12 }}>
      
          <Text style={{  marginVertical: 10, fontSize: 30 }}>Account</Text>
         
         
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.secondary,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderProfileItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

</ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
