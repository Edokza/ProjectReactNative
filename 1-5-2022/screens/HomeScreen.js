import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name='home-outline' size={30} color='#f4511e'/>
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About',{email:'ju.siripong_st@tni.ac.th'})} //Para1 - Navigate ที่จะไป, Para2 - ค่าที่จะส่งไปแบบ Static
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
