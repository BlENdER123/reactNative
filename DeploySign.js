import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function SetPinSign({navigation}) {

    const loadScene = () => {
        navigation.navigate("Congrats Sign up");
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    return (
        <View>
            <Text>Welcome!</Text>
            <Text>0:b521f249f59fcb47ee75de6b2ef3219c6834c639cfd534a9884ac606486f6a6c</Text>
            <Button title="Deploy" onPress={loadScene}/>
        </View>
    );
}