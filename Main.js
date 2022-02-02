import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { gStyles } from "./styles";

export default function Main({navigation}) {

    const loadScene = () => {
        navigation.navigate("Set Pin Login");
    }

    const loadScene2 = () => {
        navigation.navigate("Set Pin Sign up");
    }

    return (


        <View style={gStyles.main}>
            <View >
                <Text>Welcome to DefiSpace!</Text>
                <View style={gStyles.containerbtn}>
                    <Button title="Login" onPress={loadScene}/>
                    <Button title="Sign Up" onPress={loadScene2}/>
                </View>
            </View>
        </View>


    );
}

