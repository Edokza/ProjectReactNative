import React from "react";
import { StyleSheet, 
         Text, 
         View, 
         Alert, 
         SafeAreaView, 
         Button 
       } from "react-native";

const AlertExample = () => {
    const simpleAlertHandler = () => {
        alert("Hello I am Simple Alert")
    }

    const twoOptionHandler = () => {
        Alert.alert(
            "Hello",
            "I am two option alert, Do you want to cancel me?", 
            [
                {
                    text:"Yes",
                    onPress: ()=>console.log("Yes Pressed")
                },
                {
                    text:"No",
                    onPress: ()=>console.log("No Pressed")
                }
            ],
            {cancelable:true}
        )
    }

    const threeOptionHandler = () => {
        Alert.alert(
            "Hello",
            "I am three option alert, Do you want to cancel me?", 
            [
                {
                    text:"Maybe",
                    onPress: ()=>console.log("Maybe Pressed")
                },
                {
                    text:"Yes",
                    onPress: ()=>console.log("Yes Pressed")
                },
                {
                    text:"No",
                    onPress: ()=>console.log("No Pressed")
                }
            ] 
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style = {styles.container}>
                <Button title="Simple Alert" onPress={simpleAlertHandler}/>
                <Button title="Alert with Two Options" onPress={twoOptionHandler}/>
                <Button title="Alert with Three Options" onPress={threeOptionHandler}/>
            </View>
        </SafeAreaView>
    )
}

export default AlertExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
