import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview'

const ActivityIndicatorElement = () => {
    return (
        <View style = {styles.activityIndicatorStyle}>
            <ActivityIndicator
                color = '#fab666'
                size = 'large'
            />
        </View>
    );
}

const WebViewLoading = () => {
    const [Visible, setVisible] = useState(false);
 
    return (
    <SafeAreaView style ={{flex:1}}>
        <View style = {styles.container}>
            <WebView 
                style = {{flex:1}}
                //loading URL
                source = {{uri:'https://it.tni.ac.th'}}
                //Enable JavaScript support
                javaScriptEnabled = {true}
                onLoadStart = {()=>setVisible(true)} //()=>{setVisible(true)} เริ่มโหลด Web
                onLoadEnd = {()=>setVisible(false)} //โหลด Web เสร็จแล้ว
            />
           {
            Visible?<ActivityIndicatorElement/>:null
           }

        </View>
    </SafeAreaView>
  );
};

export default WebViewLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
