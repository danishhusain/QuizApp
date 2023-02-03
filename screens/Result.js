import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

function Result({ navigation, route }) {

    // const params = route.params
    //     console.log(params)
    const { score } = route.params
    console.log(score)
    const resultBanner = score > 40 ? 'https://img.freepik.com/free-vector/golden-winners-cup_1284-18399.jpg?w=740&t=st=1668533793~exp=1668534393~hmac=7ab0cf696307c163872d5f0df2daa0b75a64225c5e6849cb9d6fc0bb213100d3' :
        'https://img.freepik.com/free-photo/businessman-doing-bad-signal_1368-8842.jpg?w=740&t=st=1675424869~exp=1675425469~hmac=25fa62cfc8b46ccdaa01db6550477126bf964095713e7411afd8b30062eabaf3'
    return (
        <View style={styles.Container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>Result</Text>
            </View>
            
            <View style={styles.result}>
                <Text style={styles.resultTextScore}>{score}</Text>
                {score > 40 ? <Text style={{color:"green",fontSize:26,fontWeight:'500'}}>Won</Text>: 
                <Text style={{color:"red",fontSize:26,fontWeight:'500'}}>Lost</Text>}
               

            </View>
            {/* images */}
            <View style={styles.bannerContainer}>
                <Image source={{ uri: resultBanner }} style={styles.banner} resizeMode="contain" />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    {/* <Text style={styles.buttonText}>Try Again</Text> */}
                    {/* <Button title='Try Again'/> */}
                    <Text style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', color: 'white', fontSize: 25, fontWeight: '600', }}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Result;
const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        flex: 1,
        // backgroundColor:'blue'

    },
    banner: {
        height: '100%',
        width: '100%',
        // marginTop:10,
        // marginBottom:"50%",
        // flex:1,
        bottom: 40,
        // backgroundColor: 'red'
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'green'

    },
    button: {
        marginHorizontal: 10,
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        marginBottom: 30,
        justifyContent: 'center',
        // alignSelf:'center'


    },
    buttonText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
        paddingLeft: '40%',
        alignSelf: 'center'
    },
    result: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },
    resultText: {
        fontSize: 50,
        fontWeight: '600',
        color: '#1A759F',
    },
    resultTextScore: {
        fontSize: 30,
        fontWeight: '500',
        color: 'green',

        // backgroundColor:'yellow'
    }
})