import React,{useState} from "react";
import {View, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native'

const TouchablePractice = () => {
    const [email, onChangeEmail] = useState("")
    const [password, onChangePassword] = useState("")

    const showInput = () => {
        if (!email.trim()){
            alert("Please Enter your email")
            return
        }
        if (!password.trim()){
            alert("Please Enter your password")
            return
        }

        alert(`email: ${email}\npassword: ${password}`)
        return
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder="E-mail"
                    placeholderTextColor = "#AAAAAA"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder="Password"
                    placeholderTextColor = "#AAAAAA"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangePassword}
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity = {0.5}
                    onPress={showInput}
                >
                    <Text style={{color:"#ffffff"}}>SUMMIT</Text> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor:"#ffffff"
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        color:"black"
    },
    button: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent:"center",
        borderWidth: 0.5,
        marginTop: 15,
        fontWeight:"bold",
        backgroundColor:"#999fff"
    },
});
