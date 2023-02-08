{/* <View style={styles.sectionStyle}>
          <Timer
            totalDuration={timerDuration}
            msecs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => {
              alert('Custom Completion Function');
            }}
            //can call a function On finish of the time
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View> */}
        import { template } from '@babel/core';
import React, { useState ,useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const TimerNew = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [show, setShow] = useState(0);
  const [lap, setLap] = useState([]);
  const [theta, setTheta] = useState('00');
  const [millis, setMillis] = useState('00');
  const [ultimate, setUltimate] = useState('00:00');
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

 
  useEffect(() => {
    <Stopwatch
    laps
    msecs
    start={isStopwatchStart}
    //To start
    reset={resetStopwatch}
    //To reset
    options={options}
    //options for the styling
    getTime={(time) => {
        console.log(time);
        setUltimate(time);
      }}
  />
     
  }, [])



  useEffect(() => {
console.log(`Ultimate`, ultimate)
const time = ultimate.slice(6,8);
const milli = ultimate.slice(9,11)
setTheta(time);
setMillis(milli)
     
 }, [ultimate])

  return (
    <SafeAreaView style={styles.container}>
 
        
         
                
                    <Stopwatch
                    laps
                    msecs
                    start={isStopwatchStart}
                    //To start
                    reset={resetStopwatch}
                    //To reset
                    options={options}
                    //options for the styling
                    getTime={(time) => {
                        console.log(time);
                    setUltimate(time);
                    }}
                   
                />
                        <View style={styles.sectionStyle}>
                
          <Text style={{fontSize:50,opacity:0.4,marginHorizontal:10}}>{theta}</Text>

          <Text style={{fontSize:90,fontWeight:"bold",marginHorizontal:10}}>{millis}</Text>
          
        </View>



        <View style={{flex:0.5}}>

          <TouchableOpacity
            onPress={() => {
             
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
              
            }} style={styles.startbutton}>
            <Text style={styles.buttontext} >
              {!isStopwatchStart ? 'START THE HEIST' : 'FREEZE'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.abortbutton}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
              setShow(0);
            }}>
            <Text style={styles.buttontext}>ABORT</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>

        </View>
        

    </SafeAreaView>
  );
};

export default TimerNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"
  },
  abortbutton: {
    backgroundColor:"#7078B0",
      borderWidth:2,
      height:40,
      borderColor:"#000",
      borderRadius:10,
      width:175,
      marginVertical:10,
      alignSelf:"center"
  },
  startbutton:{
      backgroundColor:"#7078B0",
      borderWidth:2,
      height:40,
      borderColor:"#000",
      borderRadius:10,
      width:225,
      marginVertical:10
  },
  buttontext:{
   alignSelf:"center" ,
   marginTop:5,
   color:"white",
    fontWeight:"bold" ,
    fontSize:15

  }
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
    opacity:0,
    height:10
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};


import { template } from '@babel/core';
import React, { useState ,useEffect} from 'react';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView, 
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';

//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const TimerNew = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [show, setShow] = useState(0);
  const [lap, setLap] = useState([]);
  const [theta, setTheta] = useState('00');
  const [millis, setMillis] = useState('00');
  const [ultimate, setUltimate] = useState('00:00');
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  // function renderShit({item,index}){
  //   <View key={index}>
  //     <Text>{...lap}</Text>

  //   </View>
  // }
const timeTouch = ()=>{
  console.log(`theta-millis`, theta,millis)

  setLap(lap=>[...lap,{theta,millis}])
}

  
  useEffect(() => {
    console.log(`OLap vanne`, lap)

     }, [lap])
    

  useEffect(() => {
//console.log(`Ultimate`, ultimate)
const time = ultimate.slice(6,8);
const milli = ultimate.slice(9,11)
setTheta(time);
setMillis(milli)
     
 }, [ultimate])

  return (
    <SafeAreaView style={styles.container}>
 
        
         
                
                    <Stopwatch
                    laps
                    msecs
                    start={isStopwatchStart}
                    //To start
                    reset={resetStopwatch}
                    //To reset
                    options={options}
                    //options for the styling
                    getTime={(time) => {
                       // console.log(time);
                    setUltimate(time);
                    }}
                   
                />
                        <View onPress={()=>timeTouch()} style={styles.sectionStyle}>
                
          <Text style={{fontSize:50,opacity:0.4,marginHorizontal:10}}>{theta}</Text>

          <Text style={{fontSize:90,fontWeight:"bold",marginHorizontal:10}}>{millis}</Text>
          
        </View>



        <View style={{flex:0.5}}>

          <Button
            title="start/stop"
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);  
            }} style={styles.startbutton}>
            {/* <Text style={styles.buttontext} > */} 
              {/* {!isStopwatchStart ? 'START THE HEIST' : 'FREEZE'} */}
            {/* </Text> */}
          </Button>
          <TouchableOpacity
          style={styles.abortbutton}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
              setShow(0);
            }}>
            <Text style={styles.buttontext}>ABORT</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{flex:1}}>
        <SafeAreaView style={styles.scroll} horizontal={false}>
                <FlatList    
                    data={lap} 
                    horizontal={false}
                    renderItem={({item, index}) =>renderShit()}
                />
            </SafeAreaView>

        </View> */}
        

    </SafeAreaView>
  );
};

export default TimerNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    width:200,
    height:200,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    backgroundColor:"#FFFF00",
    opacity:0.4
  },
  abortbutton: {
    backgroundColor:"#7078B0",
      borderWidth:2,
      height:40,
      borderColor:"#000",
      borderRadius:10,
      width:175,
      marginVertical:10,
      alignSelf:"center"
  },
  startbutton:{
      backgroundColor:"#7078B0",
      borderWidth:2,
      height:40,
      borderColor:"#000",
      borderRadius:10,
      width:225,
      marginVertical:10
  },
  buttontext:{
   alignSelf:"center" ,
   marginTop:5,
   color:"white",
    fontWeight:"bold" ,
    fontSize:15

  },
  scroll: {
    maxHeight: "50%",
    backgroundColor: "#C89933",
},
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
    opacity:0,
    height:10
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};