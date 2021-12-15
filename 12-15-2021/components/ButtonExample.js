import React from "react";
import {View, SafeAreaView, StyleSheet, Text, Image, Button} from 'react-native'

const ButtonExample = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={{color:"black"}}>Button Example</Text>
                <Button 
                    title="Click Me"
                    onPress={()=>alert("Clicked!")}
                />
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample;

const styles = StyleSheet.create({
         container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#EEEEEE',
     }
 });
