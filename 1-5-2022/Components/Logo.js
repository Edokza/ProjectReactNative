import React from 'react'
import { Text, View } from 'react-native'

const Logo = () => {
    const title = 'TNI'
    const isTitle = true;

    const showData = () => <Text>Hello December!!</Text>
    
    return (
        <View>
            <Text style = {{color: 'red', fontSize: 20}}>Dest1nes1a</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle === true //กำหนดเงื่อนไข
                ?<Text>{title}</Text> //เงื่อนไขเป็นจริง
                :<Text>Thai-Nichi</Text> //เงื่อนไขไม่เป็นจริง
            }
            {showData()}
        </View>
    )
}

export default Logo
