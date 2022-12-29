import React, { Component } from "react";
import { SafeAreaView,View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import HomeController from "./HomeController";
import styles from "./HomeStyle";

export default class SpalashScreen extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textHeader}>Welcome to Chat Application</Text>  
            </View>
        )
    }
}

