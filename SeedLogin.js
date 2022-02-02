import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SetPinSign({navigation}) {

    const loadScene = () => {
        navigation.navigate("Congrats Login");
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    return (
        <View>
            <Text>Welcome!</Text>
            <Button title="Next" onPress={loadScene}/>
        </View>
    );
}