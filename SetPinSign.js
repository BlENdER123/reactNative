import React, {useState} from "react";
import { StyleSheet, View, Text, Button, TextInput, Pressable } from "react-native";

import { gStyles } from "./styles";

export default function SetPinSign({navigation}) {

    const [password, setPassword] = useState();

    const loadScene = () => {
        navigation.navigate("Repeat Pin Sign up", {pass: password});
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    function setPin(num) {
        console.log(num);
    }

    function validPass(pass) {
        console.log(pass);
    }

    return (
        <View style={gStyles.main}>
            <Text>Set PIN for quick login</Text>

            <TextInput 
            style={gStyles.input}
            onChangeText={(value)=>{setPassword(value)}}
            maxLength={4}
            keyboardType="numeric"
            />

            {/* <View style={gStyles.containerPin}>

                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>1</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>2</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>3</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>4</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>5</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>6</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>7</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>7</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>9</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(1)}>
                    <Text>0</Text>
                </Pressable>
                <Pressable style={gStyles.containerPinbtn} onPress={()=>setPin(-1)}>
                    <Text>D</Text>
                </Pressable>

            </View> */}

            <Button title="Next" onPress={loadScene}/>
        </View>
    );
}