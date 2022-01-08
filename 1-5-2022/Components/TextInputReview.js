import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';

const TextInputReview = () => {
  //UseState
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'blue'}}>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

export default TextInputReview;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
      justifyContent: 'center'
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
    },
  });
