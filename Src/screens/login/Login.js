import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import styles from './LoginStyles';
import { eye } from '../../assest/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import * as yup from 'yup'

import { StackActions, NavigationActions } from '@react-navigation/native';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'eve.holt@reqres.in',
            password: 'pistol',
        }
    }
    // async postapicall({values}) {
    //     console.log("api call",values)
    //     // let options = {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: values.email,
        //         password: values.password

        //     })

        // }
        // await fetch('https://reqres.in/api/login', options)
        //     .then(async (response) => {
        //         console.log("check response", response)
        //         if (response.status == 200) {
        //             const data = await response.json()
        //             console.log("datattat", data)
        //             console.log("datattat", data.token)
        //             await AsyncStorage.setItem('TOKEN', data.token)
        //         }
        //     }
        //     )
        //     .then(async (data) => {
        //         console.log("data ***********************", data)
        //         await AsyncStorage.setItem('TOKEN', data)
        //     })

    //}
    async userInfo(data){
         await AsyncStorage.getItem('TOKEN',(err, result) => {

        const newData = JSON.parse(result)
        try {
          if (newData !== null) {
            this.props.navigation.navigate("Chat")
  
  
          } else {
            this.props.navigation.dispatch(
                StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'Authenticated' })],
                  key: null
                })
              )  
          }
  
        }
        catch (err) { console.log("err", err) }
  
      })
        


    }
    onSubmit = async (values) => {
        console.log("values ===",values)
        
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password

            })

        }
        await fetch('https://reqres.in/api/login', options)
            .then(async (response) => {
                console.log("check response", response)
                if (response.status == 200) {
                    const data = await response.json()
                    console.log("datattat", data)
                    console.log("datattat", data.token)
                    await AsyncStorage.setItem('TOKEN', JSON.stringify(data.token))
                   
                    this.props.navigation.navigate("Chat")

                   
                    console.log("datattat stringyyyfyyy", data.token)

                }
            }
            )
            
    }

    render() {
        const loginValidationSchema = yup.object().shape({
            email: yup
                .string()
                .email("Please enter valid email")
                .required('Email Address is Required'),
            password: yup
                .string()
                .min(6, ({ min }) => `Password must be at least ${min} characters`)
                .required('Password is required'),
        })
        return (
            <View style={styles.loginContainer}>
                <Text style={styles.text1Headingone}>User Login</Text>
                <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => this.onSubmit(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                    }) => (
                        <>
                            <TextInput
                                name="email"
                                placeholder="Email Address"
                                style={styles.textInput}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {errors.email &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                            }
                            <TextInput
                                name="password"
                                placeholder="Password"
                                style={styles.textInput}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                            {errors.password &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                            }
                            {/* <Button
                                onPress={handleSubmit}
                                title="LOGIN"
                                disabled={!isValid}
                            /> */}
                            <TouchableOpacity
                             style={styles.loginBtn}
                              onPress={handleSubmit}
                            //   onPress={() => this.postapicll()}
                              disabled={!isValid}

                            >
                                <Text style={styles.btnText}>LOGIN</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        )
    }
}