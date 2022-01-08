import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const users = [
        {id:1, name: 'Pikachu'},
        {id:2, name: 'Doraemon'}
    ]

    const [count, setCount] = useState(0); //const count = 0
    const [title, setTitle] = useState('Hello');

    //update alway if re-render
    useEffect(()=>{
        console.log('use Effect 1')
    })
    //ในกรณีที่จะให้ทำงานรอบเดียว ex. กรณีที่เรียกข้อมูลจาก Backend
    useEffect(()=>{
        console.log('use Effect 2')
    },[])

    useEffect(()=>{
        console.log('use Effect 3')
    },[title]) //จะทำเมื่อตัวแปรใน (ที่กำหนด) มีการเปลี่ยนแปลง


    return (
        <View>
            <Text style = {styles.title}>Thai-Nichi Institute of Technology {count}</Text>
            {
                users.map((user, index)=>{
                    return <Text key={users.id}>{index+1}.{user.name}</Text> //key เหมือนอารมณ์ Primary Key ใน Database
                })
            }

            <Button 
                title='SUBMIT'
                onPress={ ()=>{
                   //setCount(5) //update ค่า count
                   setCount(count+1)
                }}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: 'green'
    }
})
