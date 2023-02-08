import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './homePage'
// import GamePage from './gamePage'
// import LeaderBoard from './leaderBoard'
import Timer from './timerNew'

const Stack = createStackNavigator();  

export default function MainNav(props) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Timer" screenOptions = {{headerShown:false}}  >
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Home"  >
            { screenProps => <Home {...screenProps} updateAuth={props.updateAuth} />}
            </Stack.Screen> */}
            {/* <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
            <Stack.Screen name="GamePage" component={GamePage} /> */}
            <Stack.Screen name="Timer" component={Timer} />

            </Stack.Navigator>
            </NavigationContainer>
    )
}
