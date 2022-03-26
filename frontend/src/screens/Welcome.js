import React, { Component } from "react";
import { StyleSheet, 
	View, 
	TouchableOpacity, 
	Text, 
	Image, 
	SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Welcome = ({props}) =>{
	const navigation = useNavigation();
  return (
    <View style={styles.container}> 
      <View style={styles.rect}>
      	<Image source = {require('../assets/images/logo.png')} /> 
      </View>
      <View style={styles.h1}>
      	<Text style={styles.loremIpsum}>Добро пожаловать в StuddyBuddy</Text>
      </View>
      <View style={styles.p1}>
      	<Text style={styles.loremIpsum2}>
        	Приложение для совместного изучения уроков и знакомств
      	</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
       >
      	<Text style={styles.start}>Начать</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  button: {
    marginHorizontal: 23,
    backgroundColor: "#4754F0",
    marginTop: 70,
    alignItems: 'center',
    borderRadius: 13,
    paddingVertical: 16,
  },
  start: {
    alignItems: 'center',
    color: "#fff",
    fontSize: 16
  },
  rect: {
  	marginHorizontal: '36.1%',
  	marginTop: '26%',
  },
  h1: {
  	marginHorizontal: 22,
  },
  p1: {
  	marginHorizontal: 25,
  	marginTop: 20,
  	textAlign: "center",
  },
  loremIpsum: {
    color: "#303030",
    fontSize: 24,
    textAlign: "center",
    marginTop: 69,
  },
  loremIpsum2: {
    color: "#8C8C8C",
    lineHeight: 16,
    textAlign: "center",
  }
});

export default Welcome;
