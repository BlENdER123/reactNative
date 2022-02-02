import React, {useState} from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import { gStyles } from "./styles";

export default function SetPinSign({navigation,route}) {

    const [password, setPassword] = useState();

    const loadScene = () => {
        navigation.navigate("Seed Sign up");
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    function setPin(num) {
        console.log(num);
    }

    function validPass(pass) {
        console.log(pass,route.params.pass);
        console.log(pass==route.params.pass);
    }

    return (
        <View style={gStyles.main}>
            <Text>Welcome</Text>

            <TextInput
             style={gStyles.input}
             onChangeText={(value)=>validPass(value)}
             maxLength={4}
             keyboardType="numeric"
            />

            
            <Button title="Next" onPress={loadScene}/>
        </View>
    );
}