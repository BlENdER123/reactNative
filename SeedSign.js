import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import {Account} from "@tonclient/appkit";
import {libWeb} from "@tonclient/lib-web";
import {signerKeys} from "@tonclient/core";
import {Address, ProviderRpcClient, TvmException} from "ton-inpage-provider";


const {TonClient} = require("@tonclient/core");

TonClient.useBinaryLibrary(libWeb);

const client = new TonClient({network: {endpoints: ["net.ton.dev"]}});

const pidCrypt = require("pidcrypt");

require("pidcrypt/aes_cbc");

const ton = new ProviderRpcClient();

export default function SetPinSign({navigation}) {

    const [seed, setSeed] = useState();

    async function genSeed(pin) {
        console.log("tet");

		let randMnemonic = await client.crypto.mnemonic_from_random({
			word_count: 12,
		});

        console.log("tet2");

		let arr = randMnemonic.phrase.split(" ");
		let mnemonic = randMnemonic.phrase;

		console.log("Mnemonic");
		console.log(randMnemonic);

		console.log("crypt");
		let encrypted = aes.encryptText(mnemonic, pin);
		console.log(encrypted);

		sessionStorage.setItem("seedHash", encrypted);

		setSeed(mnemonic);
	}

    genSeed(1234);

    const loadScene = () => {
        navigation.navigate("Deploy Sign up");
    }

    const loadScene2 = () => {
        navigation.navigate("Main2");
    }

    return (
        <View>
            <Text>Welcome!</Text>
            <Text>{seed}</Text>
            <Button title="Next" onPress={loadScene}/>
            <Button title="test" onPress={()=>genSeed("1234")}/>
        </View>
    );
}