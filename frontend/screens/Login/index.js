import { styles } from './styles.js';

import React, { useState } from 'react';
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

const Login = ({navigation}) => {

	const [data, setData] = React.useState({
		email: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
	});

	const [user, setUser] = useState('');

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
				<Text style={styles.headerText}>Вход</Text>
			</View>
			<View style={styles.inputUsername}>
				 <TextInput 
				 	placeholder = "Username"
				 	style={styles.usernameTextInput}
				 	autoCapitalize="none"
				 	onChangeText={setUser}
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
				<Text style={styles.signUpText}>Ещё нет аккаунта?</Text>
				<TouchableOpacity
					onPress={()=> navigation.navigate('Register')}
				>
				</TouchableOpacity>
			</View>

			{/*button*/}
			<View style={styles.button}>
				<TouchableOpacity
          style={styles.signIn}
          onPress={() => {loginHandle( data.username, data.password )}}
      	>
					<Text style={styles.signIn}>Sign in</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}



export default Login; 