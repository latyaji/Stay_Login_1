import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpalashScreen from '../screens/home/Home';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      token: '',
      showSpalash: true
    }
  }
  componentDidMount() {
    this.getToken()

  }
  async getToken() {
    await AsyncStorage.getItem('TOKEN', (err, result) => {

      const userData = JSON.parse(result)
      try {
        if (userData != null) {
          this.setState({ token: userData })
        }

      }
      catch (err) { console.log("err", err) }

    });

    setTimeout(() => {
      this.setState({ showSpalash: false })
    }, 500);

  }


  render() {
    
    return (
      <>
        <NavigationContainer>
          
             {this.state.showSpalash ? (
               <Stack.Navigator screenOptions={{ headerShown: false, }}>
              <Stack.Screen name="SpalashScreen" component={SpalashScreen} />
              </Stack.Navigator>
            ) : (
              <>

                {this.state.token ? <MainStack/> : <AuthStack/> }

              </>
            )} 
            

        </NavigationContainer>
      </>
    )
  }
}