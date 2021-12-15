import React from 'react' 
import {View, Text, Button} from 'react-native'
import Footer from './components/Footer'
import Logo from './components/Logo'
import AlertExample from './components/AlertExample'
import ModalExample from './components/ModelExample'

const App = () => {
    const showData = () => {
        alert('Hello World!!!')
    }
    return (
        <ModalExample/>
    )
}

export default App;
