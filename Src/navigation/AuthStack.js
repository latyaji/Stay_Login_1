import React, { Component } from "react";
import { Login, Chat, Registraion, Trial } from '../screens/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class AuthStack extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // console.log("Auth props",this.props)

        return (
            <>
                <Stack.Navigator screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="Registraion" component={Registraion} />
                    <Stack.Screen name="Trial" component={Trial} />
                </Stack.Navigator>

            </>
        );
    }
}