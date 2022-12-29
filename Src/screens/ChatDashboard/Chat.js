import React, { Component } from "react";
import { BackHandler,View, Text, Alert, Image, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout2} from '../../assest/Index'

export default class Chat extends Component {
    constructor(){
        super()
        this.state = {}
    }
    backAction = () => {
        BackHandler.exitApp() 
        // Alert.alert("Wait!", "Are you sure to go back?", [
        //   {
        //     text: "Cancel",
        //     onPress: () => null,
        //     style: "cancel"
        //   },
        //   { text: "YES", onPress: () => BackHandler.exitApp() }
        // ]);
        // return true;
      };
    
      componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          this.backAction
        );
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }
    

   


    async logOUtfun(key) {
        try {
            await AsyncStorage.removeItem(key);
            // console.log("navigation",)
            this.props.navigation.navigate("Login")
            return true;
            
        }
        catch(exception) {
            return false;
        }
    }
    

    render() {
        return (
            <View>
               <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center"}}> Chat Dashboard SCreen</Text>  
                <TouchableOpacity 
                style={{marginTop:20,alignItems:"center"}}
                   onPress={()=>this.logOUtfun('TOKEN') }>
                    <Image source={logout2} style={{width:"25%",height:25,resizeMode:"contain",tintColor:"red"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{backgroundColor:"green",padding:12,borderWidth:1,borderRadius:12,marginTop:20}}
                    onPress={()=>this.props.navigation.navigate('Registraion')}
                    >
                        <Text style={{color:"#fff",textAlign:"center"}}>Go to Next Screen</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

