import React, {useContext} from 'react';
import {View, 
	Text, 
	StyleSheet, 
	Image, 
	ScrollView, 
	SafeAreaView, 
	Button,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import colors from '../assets/colors/colors';
import myAppointments from '../assets/data/myAppointments';
import otherAppointments from '../assets/data/otherAppointments';
import profile from '../assets/images/profile.png';
//import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { AppContext } from '../context/App';
//import { LinearGradient } from 'expo-linear-gradient';


const Home = ({navigation}) => {
	const renderMyAppoinmentsItem = ({item}) => {
		return (
			<TouchableOpacity style={styles.myAppointmentsView}>
				<Text style={{
					fontWeight:'500',fontSize: 16, marginTop: 20, marginHorizontal: 20
				}}>
				{item.title}
				</Text>
				<View style={styles.subject}>
					<Text style={{fontFamily: 'Roboto', color: colors.green, fontWeight: '400', marginHorizontal: 6}}>
					{item.subject}
					</Text>
				</View>

				<View style={styles.myData}>
					<Feather 
						name="calendar"
						size={12}
						color={colors.blue}
						style={{marginRight: 3, marginTop: 1}}
					/>
					<Text style={styles.dataText}>{item.date}</Text>
				</View>

				<View style={styles.myPlace}>
					<Feather 
						name="map-pin"
						size={12}
						color={colors.blue}
						style={{marginRight: 3, marginTop: 1.5}}
					/>
					<Text style={styles.dataText}>{item.location}</Text>
				</View>

			</TouchableOpacity>
		);
	};

	const renderOtherAppoinmentsItem = ({item}) => {
		return (
			<TouchableOpacity style={styles.myAppointmentsView}>
				<Text style={{
					fontWeight:'500',fontSize: 16, marginTop: 20, marginHorizontal: 20, fontFamily: 'Roboto',
				}}>
				{item.title}
				</Text>
				<View style={styles.subject}>
					<Text style={{fontFamily: 'Roboto', color: colors.green, fontWeight: '400', marginHorizontal: 6}}>
					{item.subject}
					</Text>
				</View>

				<View style={styles.myData}>
					<Feather 
						name="calendar"
						size={12}
						color={colors.blue}
						style={{marginRight: 3, marginTop: 1}}
					/>
					<Text style={styles.dataText}>{item.date}</Text>
				</View>

				<View style={styles.myPlace}>
					<Feather 
						name="map-pin"
						size={12}
						color={colors.blue}
						style={{marginRight: 3, marginTop: 1.5}}
					/>
					<Text style={styles.dataText}>{item.location}</Text>
				</View>

			</TouchableOpacity>
		);
	};

	const {stores: {authStore}} = useContext(AppContext);
//src -> assets, screens, components, 	
	return (
		<SafeAreaView style={styles.container}> 
			<ScrollView>
				{/*Header*/}
				<SafeAreaView>
					<View style = {styles.menuWrapper}> 
						<View style={styles.imageIcon}>
							<Image source={profile} style={styles.profileImage} />
						</View>
						<View style={styles.icons}>
							<Feather 
								name="bell"
								size={25}
								color={colors.black}
								style={styles.bellIcon}
							/>
							<Feather 
								name="message-circle"
								size={25}
								color={colors.black}
								style={styles.messageIcon}
							/>
						</View>
					</View>
				</SafeAreaView>

				{/*h1 tag, and appointments*/}
				<View style={styles.numAppointments}>
					<Text style={styles.usernameTitle}>Hi {authStore.username}</Text>
					<Text style={styles.usernameAppointments}>You have 
						<Text style={{color:'red', fontFamily: 'Roboto', fontWeight: '500', fontSize: 16}}> n appointments </Text>
						today
					</Text>
				</View>

				<View style={styles.findPerfect}>
					<View style={styles.findPerfectText}>
						<Text style={styles.perfectText}>
							Find a perfect study buddy
						</Text>
					</View>
					<View style={styles.findNowButton}>
						<TouchableOpacity>
							<Text style={styles.findNowText}>Find now</Text>
						</TouchableOpacity>
					</View>
				</View>

				{/*Your appointments*/}
				<View style={styles.yAppointments}>
					<Text style={styles.yAppointmentsText}>Your Appoinments</Text>
					<Image source={require('../assets/images/exmark.png')} marginLeft={10}/>
				</View>

				{/*scrool horizontal*/}
				<View>
					<FlatList 
						data={myAppointments}
						renderItem={renderMyAppoinmentsItem}
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{paddingVertical: 10}}
					/>
				</View>

				{/*Other Appoinments*/}
				<View style={styles.oAppointments}>
					<Text style={styles.yAppointmentsText}>Other Appoinments</Text>
					<Image source={require('../assets/images/exmark.png')} marginLeft={10}/>
				</View>

				{/*scrool horizontal*/}
				<View>
					<FlatList 
						data={otherAppointments}
						renderItem={renderOtherAppoinmentsItem}
						horizontal
						showsHorizontalScrollIndicator={false}
						style={{paddingVertical: 10}}
					/>
				</View>



				{/*Your Subjects*/}
				<View style={styles.subjectSectionView}>
					<Text style={styles.yAppointmentsText}>Your Subjects</Text>
					<Feather 
							name="plus"
							size={30}
							color="#3F8AE0"
						/>
				</View>
				
				<View style={styles.mySubjectsView}>
					<View style={styles.mySubjectsLeft}>
						<Text style={styles.mySubjectsText}>Mathematics</Text>
					</View>
					<View style={styles.mySubjectsRight}>
						<Text style={styles.mySubjectsText}>Mathematics</Text>
				</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		paddingVertical: 20,
	},
	//////////////header///////////////
	menuWrapper: {
		marginHorizontal: 20, 
		marginTop: 25, 
		flexDirection: "row", 
		justifyContent: "space-between",
		alignItems: "center",
	},

	imageIcon: {

	},
	icons: {
		flexDirection: "row",
	},
	bellIcon: {
		width: 24,
		height: 24,
		marginHorizontal: 24,
	},
	messageIcon: {
		width: 24,
		height: 24,
	},


	profileImage:{
		width: 35, 
		height: 35,
		borderRadius:10,	 
	},

	numAppointments:{
		marginHorizontal: 20, 
		marginTop: 20, 
	},

	usernameTitle:{
		fontFamily: 'Roboto',
		fontSize: 26,
		fontWeight: '500',
	},

	usernameAppointments:{
		marginTop: 5,
		fontSize: 16,
		fontWeight: '500',
		fontFamily: 'Roboto',
	},

	////////////////////////
	findPerfect: {
		marginHorizontal: 20,
		marginTop: 26,
		backgroundColor: colors.whiteBlue,
		borderRadius: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: 70,
	},

	findPerfectText: {
		flexDirection: 'row',
	},

	perfectText: {
		color: colors.white,
		fontWeight: '400',
		fontSize: 14,
		fontFamily: 'Roboto',
	},
	findNowButton: {
		width: 77, 
		height: 31,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	findNowText: {
		color: colors.whiteBlue,
		fontFamily: 'Roboto',
		fontWeight: '500',
	},

	//////////YOUR APPOINTMENTS//////////
	yAppointments: {
		marginHorizontal: 20,
		marginTop: 25,
		flexDirection: 'row',
	},
	yAppointmentsText:{
		fontWeight: '500',
		fontSize: 18,
		fontFamily: 'Roboto',
	},


	//////////////////HorizontalList//////////
	myAppointmentsView:{
		marginLeft: 20,
		backgroundColor: colors.white,
		width: 184,
		height: 129,
		marginTop: 12,
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
	},

	subject: {
		backgroundColor: "#E2FFD8", 
		marginHorizontal: 20, 
		marginTop:5, 
		width: '60%', 
		height: '14%', 
		borderRadius: 103
	},

	myData: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 9
	},

	myPlace: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 5
	},

	dataText: {
		fontWeight: '400',
		fontFamily: 'Roboto',
		fontSize: 13,
		color: colors.blue
	},

	///////////////OTHER APPOINTMENTS/////////////
	oAppointments: {
		marginHorizontal: 20,
		marginTop: 35,
		flexDirection: 'row',
	},

	//////////////YOUR SUBJECTS////////////
	subjectSectionView: {
		marginHorizontal: 20,
		marginTop: 37,
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	mySubjectsView: {
		flexDirection: 'row',
	},
	mySubjectsLeft: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 14,
		borderRadius: 20,
		backgroundColor: colors.whiteBlue,
		height: 62,
		width: '44%',
		marginLeft: 20,
		marginRight: 10,
	},

	mySubjectsRight: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 14,
		borderRadius: 20,
		backgroundColor: colors.whiteBlue,
		height: 62,
		width: '44%',	
	},

	mySubjectsText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: '500',
	}, 
});

export default Home;
