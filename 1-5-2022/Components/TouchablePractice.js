import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const TouchablePractice = () => {
  //UseState
  const [email, setChangeEmail] = useState('');
  const [password, setChangePassword] = useState('');

  const onCheck = () => {
    alert('Email: ' + email + "\n" + 'Password: ' + password  );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          onChangeText={email => {
            setChangeEmail(email);
          }}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Password"
          onChangeText={password => {
            setChangePassword(password);
          }}
        />
      </View>

      <TouchableOpacity 
        activeOpacity={0.5}
        onPress = {onCheck}
      >
       
        <View style={styles.buttonStyle}>
        <Text style = {styles.buttonTextStyle}>SUBMIT</Text>
        </View>

      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TouchablePractice;

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
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: '#485a96',
    height: 40,
    marginTop: 15,
    width: '100%',
  },
});
