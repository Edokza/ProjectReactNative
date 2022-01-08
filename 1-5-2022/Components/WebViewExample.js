import React from 'react'
import { Text, View , SafeAreaView} from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewExample = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <WebView
                source = {{uri: 'https://cdjapan.co.jp/'}}
                style = {{marginTop:20}}
            />
        </SafeAreaView>
    )
}

export default WebViewExample


