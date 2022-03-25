import React from 'react';
import {View,
  Text,
  Button,
  TouchableOpacity, 
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
//import { AuthContext } from '../components/context';
////gjytj 

const Register = ({navigation}) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  //const { signIn } = React.useContext(AuthContext);

  const textInputChange = (text) => {
    if (text.trim().length >= 4) {
      setData({
        ...data,
        email: text,
        check_textInputChange: true, 
        isValidUser: true,
      });
    }
    else {
      setData({
        ...data,
        email: text,
        check_textInputChange: true,
        isValidUser: false,
      });
    }
  }

  const handlePasswordChange = (text) => {
    if( text.trim().length >= 5 ) {
      setData({
        ...data,
        password: text,
        isValidPassword: true
      });
    } 
    else {
      setData({
        ...data,
        password: text,
        isValidPassword: false
      });
    }
  }

  const updateSecureTextEntry = () => {
    setData ({
      ...data,
      secureTextEntry: !data.secureTextEntry 
    });
  }

  const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidUser: true
      });
    } 
    else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }

  //handle the username;
  const loginHandle = (userName, password) => {

    const foundUser = Users.filter( item => {
        return userName == item.username && password == item.password;
    } );

    if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        {text: 'Okay'}
      ]);
      return;
    }

    if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'}
      ]);
      return;
    }
    signIn(foundUser);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Регистрация</Text>
      </View>
      <View style={styles.inputEmail}>
         <TextInput 
          placeholder = "Email"
          style={styles.emailTextInput}
          autoCapitalize="none"
          onChangeText={(text)=>textInputChange(text)}
          onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
         /> 
      </View>

      <View style={styles.inputUsername}>
         <TextInput 
          placeholder = "Username"
          style={styles.usernameTextInput}
          autoCapitalize="none"
          onChangeText={(text)=>textInputChange(text)}
          onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
         /> 
      </View>

      <View style={styles.inputPassword}>
         <TextInput 
          placeholder = "Password"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={styles.usernamePasswordInput}
          autoCapitalize="none"
          onChangeText={(text)=>handlePasswordChange(text)}
         /> 
         <TouchableOpacity
            onPress={updateSecureTextEntry}
         >
            {data.secureTextEntry ? 
              <Feather 
                name="eye-off"
                color="#9D9FA0"
                size={17}
                style={styles.eye}
               />
               :
               <Feather 
                name="eye"
                color="#9D9FA0"
                size={17}
                style={styles.eye}
               />
            }
          </TouchableOpacity>
      </View>

      {/*Ещё нет аккаунта?*/}
      <View style={styles.signUp}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Login')}
        >
          <Text style={styles.signUpText}>Уже есть аккаунт?</Text>
        </TouchableOpacity>
      </View>

      {/*button*/}
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {loginHandle( data.username, data.password )}}
        >
          <Text style={styles.signIn}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    marginTop: '16.7%',
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: "#303030",
    fontWeight: '600',
  },

  /////////email/////////
  inputEmail: {
    marginHorizontal: 24,
    backgroundColor: "#F6F7FA",
    height: 56,
    marginTop: 30,
    borderRadius: 13,
  },
  emailTextInput: {
    flex: 1,
    paddingLeft: 16,
    color: "#9D9FA0",
  },

  ///////////username//////////
  inputUsername: {
    marginHorizontal: 24,
    backgroundColor: "#F6F7FA",
    height: 56,
    marginTop: 30,
    borderRadius: 13,
  },
  usernameTextInput: {
    flex: 1,
    paddingLeft: 16,
    color: "#9D9FA0",
  },


  ////////password/////////
  inputPassword: {
    marginHorizontal: 24,
    backgroundColor: "#F6F7FA",
    height: 56,
    marginTop: 30,
    borderRadius: 13,
    flexDirection: 'row',
  },

  usernamePasswordInput: {
    flex: 1,
    paddingLeft: 16,
    color: "#9D9FA0",
  },
  eye: {
    marginTop: 18,
    marginRight: 15,
  },

  ///////еще нет аккаунта///////
  signUp: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontFamily: "Roboto",
    fontWeight: '500',
    color: "#4754F0",
    fontSize: 14,
  },

  /////////button/////////
  button: {
    backgroundColor: "#979AC2",
    marginHorizontal: 24,
    marginTop: 35,
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    fontFamily: "Roboto",
    fontWeight: '500',
    color: '#fff',
    fontSize: 16,
  },
});

export default Register; 