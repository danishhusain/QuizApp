import React, { useEffect, useState } from 'react';
import { View,Text, TouchableOpacity,StyleSheet,ActivityIndicator } from 'react-native';


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function Quiz({navigation}) {
    const[questions,setQuestions]=useState()
    const[ques,setQues]=useState(0)
    const[options,setOptions]=useState([])
    const[score,setScore]=useState(0)
    const[isLoading,setIsLoading]=useState(false)
    const getQuiz=async()=> {
        setIsLoading(true)
        let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
          let json = await response.json();
        //   console.log(json.results)
          setQuestions(json.results)
          setOptions(genrateOptionsAndShuffles(json.results[0]))
        setIsLoading(false)

    }
    useEffect(()=>{
        getQuiz()
    },[])
   
    const handleNextPress=()=> {
        setQues(ques+1)
        setOptions(genrateOptionsAndShuffles(questions[ques+1]))

    }

    let genrateOptionsAndShuffles =(_question)=> {
    let options=[..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
    }
    const handleSelectedOption=(_option)=> {
        if (_option===questions[ques].correct_answer) {
            setScore(score+10)
        }
        if (ques!==9) {
            setQues(ques+1)
        setOptions(genrateOptionsAndShuffles(questions[ques+1]))
        }
        if (ques===9) {
            handleShowResult()
        }
        
    }
    const handleShowResult=()=> {
        navigation.navigate('Result',{score:score})
    }
 
    return ( 
        <View style={styles.container}>
            {isLoading?<View style={{flex:1,alignItems:'center' , justifyContent:'center',}}>
                <ActivityIndicator size="large" />
                <Text style={{fontSize:25, fontWeight:'400'}}>Loading</Text></View>:questions &&
            <View style={styles.parent}>
            <View style={styles.top}>
            <Text style={styles.question}>Q.{ques+1}:{decodeURIComponent( questions[ques].question)}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.textOption} onPress={()=>handleSelectedOption(options[0])}>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textOption} onPress={()=>handleSelectedOption(options[1])}>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textOption} onPress={()=>handleSelectedOption(options[2])}>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textOption} onPress={()=>handleSelectedOption(options[3])}>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
            

                {ques!==9 && <TouchableOpacity onPress={()=>handleNextPress()} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>}

                {ques===9 && <TouchableOpacity onPress={()=>handleShowResult()} style={styles.button}>
                <Text style={styles.buttonText}>Result</Text>
                </TouchableOpacity>}
            </View>
            </View>
             } 
        </View>
     );
}

export default Quiz;
const styles = StyleSheet.create({
    container: {
        padding: 12,
        flex:1,
        // backgroundColor:"red"
    },
    top: {
        marginVertical:8,
        height:100,
        // backgroundColor:"red"

    },
    options: {
        marginVertical:16,
        flex:1,
        borderWidth: 1,
        borderColor:"black",
        borderRadius:10,
        padding:10,
        // backgroundColor:"blue",
        
    },
    bottom: {
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row',
    
    },
    textOption: {
        borderWidth:1,
        marginVertical:16,
        marginHorizontal:8,
        padding:30,
        margin:60,
        borderRadius:15,
        backgroundColor:'#34A0A4'


    },
    button: {
        width:'45%',
        backgroundColor:'#1A759F',
        padding:16,
        borderRadius:16,
        borderColor:'grey',
        alignItems:"center",
        marginVertical:10,

    },
    buttonText: {
        fontSize:20,
        fontWeight:'600',
        color:'white',
    },
    question: {
        fontSize:21,
        color:'black',
        // backgroundColor:"red"

    },
    option: {
        fontSize:16,
        color:'white'
    },
    parent: {
        height:'100%'
    }
})

