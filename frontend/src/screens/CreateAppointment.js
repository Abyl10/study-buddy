import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'; 
import Feather from 'react-native-vector-icons/Feather';

const CreateAppointment = ({navigation}) => {
	const [isOffline, setIsOffline] = useState(false);

	const [subject, setSubject] = useState('');
	const [topic, setTopic] = useState('');
	const [level, setLevel] = useState(0); 
	const [place, setPlace] = useState('');
	const [data, setData] = useState('');
	const [zoomLink, setZoomLink] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={()=> navigation.goBack(null)}>
					<Feather 
						name="arrow-left"
						size={30}
					/>
				</TouchableOpacity>
				<View style={styles.createTextView}>
					<Text style={styles.createText}>Create an appoinment</Text>
				</View>
			</View>

			<View style={styles.mode}>
				<TouchableOpacity style={isOffline ? styles.offline : styles.inactive} onPress={() => setIsOffline(true)}>
					<Text style={[{ color: isOffline ? 'white' : 'black' }, styles.headerText]}>ОФФЛАЙН</Text>
				</TouchableOpacity>
				<TouchableOpacity style={isOffline ? styles.inactive : styles.offline} onPress={() => setIsOffline(false)}>
					<Text style={[{ color: isOffline ? 'black' : 'white' }, styles.headerText]}>ОНЛАЙН</Text>
				</TouchableOpacity>
			</View>
				{
					isOffline ? (
						<ScrollView>
							<View style={styles.allHeaderView} marginTop={45}>
								<Text style={styles.allHeaders}>Предмет</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setSubject}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Тема</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setTopic}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Уровень (от 1 до 5)</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Введите число"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setLevel}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Место встречи</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setPlace}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Дата и время</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setData}
							 />
							</View>

							<TouchableOpacity style={styles.button}>
				      	<Text style={styles.start}>Начать</Text>
				      </TouchableOpacity>

						</ScrollView>
					) : (
						<View>
							<View style={styles.allHeaderView} marginTop={45}>
								<Text style={styles.allHeaders}>Предмет</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setSubject}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Тема</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setTopic}
							 />
							</View>

							<View style={styles.allHeaderView}>
								<Text style={styles.allHeaders}>Ссылка на видео-конференцию</Text>
							</View>
							<View style={styles.inputUsername}>
							 <TextInput 
							 	placeholder = "Placeholder"
							 	style={styles.textInput}
							 	autoCapitalize="none"
							 	height={56}
							 	onChange={setZoomLink}
							 />
							</View>
							
							<TouchableOpacity style={{marginTop: 15, alignItems: 'center'}}>
								<Text style={{fontFamily: 'Roboto', fontSize: 14, fontWeight: '400', color: "#4754F0"}}>
									сгенерировать Zoom-Ссылку
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
				        style={styles.button}>
				      	<Text style={styles.start}>Начать</Text>
				      </TouchableOpacity>
						</View>
					)
				}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	}, 
	header: {
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	createTextView: {
		flex: 1,
		alignItems: 'center',
	},
	createText:{
		fontFamily: 'Roboto',
		fontWeight: '600',
		fontSize: 18,
	},

	////////////////
	mode: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 43,
	}, 

	offline: {
		backgroundColor: "#29303E",
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		height: 25,
		borderRadius: 20,
	},
	inactive: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
		height: 25,
		borderRadius: 20,
		backgroundColor: '#fff',
	}, 
	headerText: {
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontSize: 13,
	},

	/////////////////////
	allHeaderView:{
		marginHorizontal:24,
		marginTop: 20,
	},

	allHeaders:{
		fontFamily:'Roboto',
		fontWeight: '600',
		fontSize: 14,
	},
	inputUsername: {
		marginHorizontal: 24,
		backgroundColor: "#F6F7FA",
		marginTop: 4,
		borderRadius: 10,
	},
	textInput: {
		paddingLeft: 16,
		color: "#9D9FA0",
	},

	///////////buttons////////////
	button: {
    marginHorizontal: 23,
    backgroundColor: "#4754F0",
    alignItems: 'center',
    borderRadius: 13,
    paddingVertical: 16,
    marginTop: 70,
  },
  start: {
    alignItems: 'center',
    color: "#fff",
    fontSize: 16
  },
});

export default CreateAppointment;

