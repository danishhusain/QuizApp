import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity } from 'react-native';

function Result({navigation,route}) {
                
// const params = route.params
//     console.log(params)
const {score} = route.params
    console.log(score)
const resultBanner= score>40?'https://img.freepik.com/free-vector/golden-winners-cup_1284-18399.jpg?w=740&t=st=1668533793~exp=1668534393~hmac=7ab0cf696307c163872d5f0df2daa0b75a64225c5e6849cb9d6fc0bb213100d3':
'https://img.freepik.com/free-photo/debt-ridk-difficulty-downfall-concept_53876-120077.jpg?w=826&t=st=1668534239~exp=1668534839~hmac=8deeb9719798066fe956a7cd101772ba54cea399fad65e4fc5ac754cdecfcfc'
    return ( 
        <View style={styles.Container}>
            <View style={styles.result}><Text style={styles.resultText}>Result</Text></View>
            <View style={styles.result}><Text style={styles.resultTextScore}>{score}</Text></View>
            <View style={styles.bannerContainer}>
            <Image source={{uri:resultBanner}}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Result;
const styles = StyleSheet.create({
    Container: {
        backgroundColor:'white',
        flex:1,
        // backgroundColor:'blue'

    },
    banner: {
        height: 450,
        width:450,
        // marginTop:10,
        // marginBottom:"50%",
        // backgroundColor:'red'

    },
    bannerContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        // backgroundColor:'green'

    },
    button: {
       marginHorizontal:10,
        backgroundColor:'#1A759F',
        padding:16,
        borderRadius:16,
        marginBottom:30,
        
    },
    buttonText: {
        fontSize:25,
        fontWeight:'600',
        color:'white',
        paddingLeft:'40%',
    },
    result: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    resultText: {
        fontSize:50,
        fontWeight:'600',
        color:'grey',
    },
    resultTextScore: {
        fontSize:30,
        fontWeight:'400',
        color:'grey',
        // backgroundColor:'yellow'
    }
})