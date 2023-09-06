import {  Text,  View,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
/*import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '@rneui/themed';*/
import {ROUTES} from '../constants'
import { HomeScreen,Categories,Alert,Profile } from '../screens';



const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:true,
headerStyle:{
backgroundColor: '#CDCCDA',
},
headerTitleStyle:  {fontWeight:'bold'},

  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    backgroundColor: "#CDCCDA"
  }
}

const BottomTabNav = () => {
  return (
    
    
      
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name={ROUTES.HOMESCREEN} 
          component={HomeScreen} 
          options={{
            
            headerRight:() =>(
              <View style={{marginRight:40}}>
          <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <AntDesign 
          name="search1" 
          size={24} 
          color={'black'}
        />
        </TouchableOpacity>
        </View>
            ),
            headerStyle:{
             // height:60,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor: '#CDCCDA',
              shadowColor:'#000',
              elevation:25,
            }, 
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? '#16247d': '#1111'} />
                  <Text style={{fontSize: 12, color: '#16247d'}}>Home</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen
           name={ROUTES.CATEGORIES} 
           component={Categories}
           options={{
           
            headerRight:() =>(
              <View style={{marginRight:40}}>
          <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <AntDesign 
          name="search1" 
          size={24} 
          color={'black'}
        />
        </TouchableOpacity>
        </View>
            ),
            headerStyle:{
              
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor: '#CDCCDA',
              shadowColor:'#000',
              elevation:25,
            }, 
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <MaterialIcons  name="category" size={24} color={focused ? '#16247d': '#1111'} />
                  <Text style={{fontSize: 12, color:'#16247d'}}>Categories</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name={ROUTES.ALERT} 
          component={Alert} 
          options={{
          
            headerRight:() =>(
              <View style={{marginRight:40}}>
          <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <AntDesign 
          name="search1" 
          size={24} 
          color={'black'}
        />
        </TouchableOpacity>
        </View>
            ),
            headerStyle:{
             // height:60,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor: '#CDCCDA',
              shadowColor:'#000',
              elevation:25,
            }, 
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <AntDesign name="notification" size={24} color={focused ? '#16247d': "#1111"} />
                  <Text style={{fontSize: 12, color: '#16247d'}}>Alert</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name={ROUTES.PROFILE} 
          component={Profile} 
           options={{
            
            headerRight:() =>(
              <View style={{marginRight:40}}>
          <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
        <AntDesign 
          name="search1" 
          size={24} 
          color={'black'}
        />
        </TouchableOpacity>
        </View>
            ),
            headerStyle:{
              //height:60,
              borderBottomLeftRadius:50,
              borderBottomRightRadius:50,
              backgroundColor: '#CDCCDA',
              shadowColor:'#000',
              elevation:25,
            }, 
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <AntDesign name="profile" size={24} color={focused ? '#16247d': '#1111'} />
                  <Text style={{fontSize: 12, color: '#16247d'}}>profile</Text>
            </View>
              )
            }
          }}
          />
          
          
       </Tab.Navigator>

     
)
}
export default BottomTabNav;