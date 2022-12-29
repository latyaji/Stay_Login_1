import React, { Component } from "react";
import { Chat,Registraion,Trial,Login } from '../screens/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class MainStack extends Component{
   constructor(props){
       super(props)
       this.state={ }
   }
   render(){
       return(
        <>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
              <Stack.Screen name="Chat" component={Chat} />
              <Stack.Screen name="Registraion" component={Registraion} />
              <Stack.Screen name="Trial" component={Trial} />
              <Stack.Screen name="Login" component={Login} />

              </Stack.Navigator>
            {/* <Chat navigation={this.props.navigation}/>
            <Registraion navigation={this.props.navigation}/>
            <Trial navigation={this.props.navigation}/> */}

    </>
       )
   }
}
