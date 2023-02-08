import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HomePage({navigation}) {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            {/* <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate("GamePage")}>
            <Text >Press to start game</Text>

            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate("LeaderBoard")}>
            <Text >Press to stopwatch</Text>

            </TouchableOpacity> */}
            <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate("Timer")}>
            <Text >Press to new timer </Text>

            </TouchableOpacity>
        </View>
    )
}
