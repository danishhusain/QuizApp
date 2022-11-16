import React from 'react';
import { View,Text,TouchableOpacity,Image,StyleSheet } from 'react-native';
import Title from '../components/Title';


function Home({navigation}) {
    return ( 
        <View style={styles.container}>
            {/* <Text>This is Home</Text> */}
            <Title/>
            <View style={styles.bannerContainer}>
                <Image source={{uri:'https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?size=338&ext=jpg&ga=GA1.2.775074327.1668426530&semt=sph'}}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
     );
}
export default Home;
const styles = StyleSheet.create({
    banner: {
        height: 400,
        width:400,
        marginTop:10

    },
    bannerContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:1

    },
    container: {
        backgroundColor:'white',
        paddingTop:30,
        paddingHorizontal:40,
        height:'100%'
    },
    button: {
        width:'100%',
        backgroundColor:'#1A759F',
        padding:16,
        borderRadius:16,
        alignItems:'baseline',
        marginBottom:30
    },
    buttonText: {
        fontSize:25,
        fontWeight:'600',
        color:'white',
        paddingLeft:'40%',
    }
})
