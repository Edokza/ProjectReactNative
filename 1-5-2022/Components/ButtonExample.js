import React from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

const ButtonExample = () => {
 const onPressAlert = () => {
     alert('HELP!?');
 }
 
    return (
    <SafeAreaView style ={{flex:1}}>
     
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button 
            onPress = {onPressAlert}
            title = "CLICK ME" 
            color = "#f72a66"/>
      </View>

    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
