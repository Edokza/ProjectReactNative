import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';

const TextInputPractice1 = () => {
  //UseState
  const [Inname, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');

  const onPressAlert = () => {
    if (!Inname.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    alert('Success');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Name"
          onChangeText={(Inname) => {onChangeName(Inname)}} //onChangeText ไม่ใช่ตัวแปร อารมณ์ Properties
        />
      </View>

      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          onChangeText={(email) => {onChangeEmail(email)}}
        />
      </View>

      <View style={{marginTop: 15}}>
        <Button onPress={onPressAlert} title="SUBMIT" color="#f72a66" />
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
