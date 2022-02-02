import {StyleSheet} from "react-native";

export const gStyles = StyleSheet.create({
    main:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    containerbtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    input: {
        padding: "10px 5px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#000000",
        borderRadius: "5px"
    },

    containerPin:{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "space-between",
        width: "200px"
    },
    containerPinbtn: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#3569f0",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff"
    }
    
});