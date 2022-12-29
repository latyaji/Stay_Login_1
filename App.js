// import React, { Component } from 'react';
// // import Navigation from './Src/navigation/Navigation';
// import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { GoogleSignin ,GoogleSigninButton} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId:'1042565353931-8p3t8kv0oehdhrls1ohh7cq3ut7bmivu.apps.googleusercontent.com',
//   offlineAccess: true
// })

// export default class App extends Component {
//   constructor(){
//     super()
//       this.state={
//         userGoggleInfo :{},
//         loaded : false

//     }
//   }

//   signIn = async()=>{
//     try{
//       await GoogleSignin.hasPlayServices()
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({
//       userGoggleInfo : userInfo,
//       loaded : true

//     })
//   }
//     catch(error){
//       console.log(error.message);
//     }
//   }

//   render() {

//     return (
//       // <Navigation />
//       <View>
//         <Text>App Screen</Text>
//         <GoogleSigninButton
//          onPress={this.signIn}
//          size={GoogleSigninButton.Size.Wide}
//          color={GoogleSigninButton.Color.Dark}
//          style={{width:100,height:100}}
//         />
//         {this.state.loaded ?
//        <View>
//         <Text>{this.state.userGoggleInfo.user.name}</Text>
//         <Text>{this.state.userGoggleInfo.user.email}</Text>
//         <Image
//          source={{uri:this.state.userGoggleInfo.user.photo}}
//         />

//         </View> :
//         <Text>Not SignedIn</Text>

//       }
//       </View>
//     );
//   }
// }




// Google login code here

import React, { Component } from 'react';
import Navigation from './Src/navigation/Index';

export default class App extends Component {
  constructor(){
    super()
      this.state={}
  }
  render() {
    return (
      <Navigation />
    );
  }
}
//main code 



