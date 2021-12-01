// import React, { Component } from "react";
// import { View, Text } from 'react-native';

// const Greeting = ({fname,lname}) =>{
//   //const {name} = props;
//   return(
//     <View style = {{alignItems:'center'}}>
//       <Text>Your First Name is {fname} and Last name is {lname}  </Text>
//     </View>
//   );
// }

// const LotsOfGreeting = () =>{
//   return(
//     <View style = {{alignItems:'center',justifyContent: 'center',flex : 1}}>
//       <Greeting fname = "f1" lname = "l1"/>
//       <Greeting fname = "f2" lname = "l2"/>
//     </View>
//   );
// }

// export default LotsOfGreeting;

// import React from "react";
// import { useState, useMemo } from "react";
// import { Text, View, Button, StyleSheet } from "react-native";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [isRandom, setRandom] = useState(false);

//   const randomWithoutMemo = Math.random();

//   const randonNumber = useMemo(() => {
//     return Math.random();
//   }, [isRandom]);


//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Button title="down" onPress={() => setNumber(number - 1)} />
//         <Text style={styles.countNumber}>{number}</Text>
//         <Button title="up" onPress={() => setNumber(number + 1)} />
//       </View>
//       <Text>without useMemo: {randomWithoutMemo}</Text>
//       <Text>use Memo : {randonNumber} </Text>
//       <Button
//         title = "random"
//         onPress = {()=>setRandom(!isRandom)}
//       />
//     </View>
//   );
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 10,
//   },
//   countContainer: {
//     flexDirection: 'row',
//     margin: 30,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   countNumber: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red'
//   }
// });

// import React from "react";

// import { Text, View, Button, StyleSheet, SafeAreaView, RefreshControl, ScrollView } from "react-native";

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

// const App = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.container} >
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
//       }
//       >
//         <Text>Pull down to see RefreshControl indector</Text>
//       </ScrollView>

//     </SafeAreaView>
//   )

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

// import React, { useState } from "react";

// import { TextInput, StyleSheet, SafeAreaView, Text } from "react-native";

// const UselessTextInput = () => {

//   const [text, onChangeText] = React.useState("Useless Text")
//   const [number, onChangeNumber] = ReactuseState(null);

//   return (
//     <SafeAreaView style={styles.container} >
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <Text>{Text}</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//       <Text>{number}</Text>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderEndWidth: 1,
//     padding: 10,
//   }
// });

// export default UselessTextInput;

import React, { useState } from "react";

import { SafeAreaView, StyleSheet, TextInput, Text, Button, View } from "react-native"

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const checkValueIsNumberorNot = () => {
    if(isNaN(inputValue)){
      alert("Not a Number");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View>
        <TextInput
          placeholder="Enter text"
          style={style.textInputStyle}
          onChangeText={(inputValue) => { setInputValue(inputValue) }}
        />
        <Button
          title="Check Value Is Number or Not"
          color="#606070"
          onPress={checkValueIsNumberorNot}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    marginTop: 50
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    boederColor: 'black'
  }
})