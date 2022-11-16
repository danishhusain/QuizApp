import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
function Title() {
    return ( 
        <View >
            <Text style={styles.title}>Quizller</Text>
        </View>
     );
}

export default Title;
const styles = StyleSheet.create({
    title: {
        fontSize:50,
        fontWeight:'700',
        paddingLeft:75
    }
})