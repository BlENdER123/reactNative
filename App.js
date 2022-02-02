import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainStack from "./navigation";

export default function App() {
  return (
    <MainStack/>

    // <View style={styles.container}>

    //   <View>
    //     <Text>Title</Text>
    //     <Text>Main Text</Text>
    //     <View>
    //       <Text>Navigation</Text> 
    //       {/* <Text>Navigation</Text>  поменять на нормальную форму */}
    //     </View>
    //   </View>

      
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
