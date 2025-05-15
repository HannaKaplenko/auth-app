import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container:{
        backgroundColor: "#096B68",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },


    card: {
width: 343,
height: 422,
borderRadius: 10,
paddingVertical: 30,
paddingHorizontal: 24,
backgroundColor: "#FFFBDE",
marginHorizontal: 16,
marginVertical: 195,
},
    title: {
 color: "#FE4F2D",
fontWeight: 500,
fontSize: 24,
lineHeight: 32,
    },

    label: {
        color: "#000000",
        fontWeight: 500,
        fontSize: 16,
    },

    Image: {
        width: 16,
        height: 11,
        position: 'absolute',
        marginLeft: "85%",
   
       
    },


    input: {
        borderRadius: 8,
        borderWidth: 1,
        color: "#000000",
        marginHorizontal: 8,
        marginVertical: 10, 
    },

    inputWrapper: {
        justifyContent: 'center',
        display: "flex",
      },

      eyeButton: {
        justifyContent: 'center',
        alignItems: 'center',
  

      },

    message: {
        color: "#191F35",
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        marginBottom: 40,
       

    },

    button: {
        backgroundColor: "#FE4F2D",
        width: 295,
        height: 44,
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',

    }, 

    timerText: {
        color: "FFFFFF",
        fontWeight: "bold",
       textAlign: "center",
       margin: 30,

    },

    redText: {
        color: "red",
        fontWeight: "bold",
    },


})