import { View, SafeAreaView ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper';
//import BottomTabNav from '../navigation/BottomTabNav';
//import COLORS from '../constants/colors';
const HomeScreen=({navigation}) => {
  return (
    <SafeAreaView  style={{backgroundColor: '#CDCCDA', }}>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("")}>
       
                      <Card>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card content goes here.</Paragraph>
        </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("")}>
      <Card>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card content goes here.</Paragraph>
        </Card.Content>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("")}>
      <Card>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card content goes here.</Paragraph>
        </Card.Content>
      </Card>
     
      </TouchableOpacity>
    </View>

    
    </SafeAreaView>
  )
}
export default HomeScreen;
