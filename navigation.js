import React from "react";

import Main from "./Main";
import SetPinSign from "./SetPinSign";
import RepeatPinSign from "./RepeatPinSign";
import SeedSign from "./SeedSign";
import DeploySign from "./DeploySign";
import CongratsSign from "./CongratsSign";
import SetPinLogin from "./SetPinLogin";
import RepeatPinLogin from "./RepeatPinLogin";
import SeedLogin from "./SeedLogin";
import CongratsLogin from "./CongratsLogin";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();


export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                name="Login & Sign up"
                component={Main}
            />

            <Stack.Screen
                name="Set Pin Sign up"
                component={SetPinSign}
            />

            <Stack.Screen
                name="Repeat Pin Sign up"
                component={RepeatPinSign}
            />

            <Stack.Screen
                name="Seed Sign up"
                component={SeedSign}
            />

            <Stack.Screen
                name="Deploy Sign up"
                component={DeploySign}
            />

            <Stack.Screen
                name="Congrats Sign up"
                component={CongratsSign}
            />

            <Stack.Screen
                name="Set Pin Login"
                component={SetPinLogin}
            />

            <Stack.Screen
                name="Repeat Pin Login"
                component={RepeatPinLogin}
            />

            <Stack.Screen
                name="Seed Login"
                component={SeedLogin}
            />

            <Stack.Screen
                name="Congrats Login"
                component={CongratsLogin}
            />

        </Stack.Navigator>
    </NavigationContainer>
}