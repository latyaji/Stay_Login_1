import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        mainContainer: {flex:1,backgroundColor:"#fff"},
        text1Headingone: {color: '#000',fontSize:40,fontWeight:"bold",textAlign:"center",marginTop:30,marginBottom:30},
        text1Headingtwo: {color: '#000',fontSize:18,borderRadius: 15,width: "90%",padding: 12,marginTop: 12,alignSelf: "center",borderBottomWidth:2},
        loginBtn:{borderWidth:1,borderRadius:12,backgroundColor:"#000",width:"30%",padding:12,alignSelf:"center",marginTop:20},
        btnText:{ textAlign: "center",fontWeight:"bold",color:"#fff"},
        passwordImg:{width:"20%",height:25,resizeMode:"contain",marginTop:30},
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        
          loginContainer: {
            width: '100%',
            alignItems: 'center',
            alignSelf:"center",
            justifyContent:"center",
            flex:1,
            backgroundColor: 'white',
            padding: 10,
            elevation: 10,
            backgroundColor: '#e6e6e6'
          },
          textInput: {
            height: 40,
            width: '80%',
            margin: 10,
            backgroundColor: 'white',
            borderColor: 'gray',
            // borderWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            borderRadius: 10,
          },
    }
);

export default styles 




