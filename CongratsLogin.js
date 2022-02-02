import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SetPinSign({navigation}) {

    const loadScene = () => {
        navigation.navigate("Repeat Pin Login");
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    return (
        <View>
            <Text>Congrats!</Text>
            {/* <Button title="Next" onPress={loadScene}/> */}
        </View>
    );
}