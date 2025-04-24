import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

function Boton(props) {
    return (

        <View style={styles.contianer}>
            <View style={styles.botonContainer}>
                <TouchableOpacity style={[
        styles.boton, { backgroundColor: props.color }]}
         onPress={props.onPress}>

                    <Text style={[styles.botonT, { color: props.colorText }]}>{props.boton}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Boton;

const styles = StyleSheet.create({
    contianer:{
        alingItems:'center',
        justifyContent:'center',
    },

    botonContainer:{
       alingItems:'center',
     
    },
    boton:{
     
        marginTop: 15,
        borderRadius: 10,
        height: 70,
        width: 205,
        justifyContent:'center',
        shadowncolor: 'white',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 6,
    },
    botonT:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        
       
    },
})