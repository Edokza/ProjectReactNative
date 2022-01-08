import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert('Hello I am Simple Alert');
  };

  const twoOptionHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am two option alert. Do you wan to cancle me?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes Pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
        },
      ],
    );
  };

  const threeOptionHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      'Hello',
      //body
      'I am two option alert. Do you wan to cancle me?',
      [
        {
          text: 'Maybe',
          onPress: () => console.log('Maybe Pressed'),
        },
        {
          text: 'Yes',
          onPress: () => console.log('Yes Pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="TEST" onPress={simpleAlertHandler} color="#f72a66" />
        <Button title="Alert with Two Option" onPress={twoOptionHandler} />
        <Button title="Alert with Three Option" onPress={threeOptionHandler}  color="#c2edda"  />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2c2c',
  },
});
