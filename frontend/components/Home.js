import React from 'react';
import {View, 
	Text, 
	StyleSheet, 
	Image, 
	ScrollView, 
	SafeAreaView, 
	Button,
} from 'react-native';
import colors from '../assets/colors/colors';
import myAppointments from '../assets/data/myAppointments';
import otherAppointments from '../assets/data/otherAppointments';
import profile from '../assets/images/profile.png';
//import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';



const Home = ({navigation}) => {
	return (
		<View style={styles.container}> 
			<ScrollView>
				{/*Header*/}
				<SafeAreaView>
					<View style = {styles.menuWrapper}> 
						<Feather 
							name="menu"
							size={25}
							color={colors.black}
							style={styles.menuIcon}
						/>
						<Image source={profile} style={styles.profileImage} />
					</View>
				</SafeAreaView>

				{/*h1 tag, and appointments*/}
				<View style={styles.numAppointments}>
					<Text style={styles.usernameTitle}>Hi Username,</Text>
					<Text style={styles.usernameAppointments}>You have 
						<Text style={{color:'red', fontFamily: 'Roboto-Medium', fontSize: 16}}> n appointments </Text>
						today
					</Text>
				</View>

				<View style={styles.findPerfect}>
					<View>
						<Text style={styles.perfectText}>
							Find a perfect study buddy
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},

	menuWrapper: {
		marginHorizontal: 20, 
		marginTop: 20, 
		flexDirection: "row", 
		justifyContent: "space-between",
		alignItems: "center",
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
		fontFamily: 'Roboto-Medium',
		fontSize: 26,
	},

	usernameAppointments:{
		marginTop: 5,
		fontSize: 16,
	},

	findPerfect: {
		marginHorizontal: 20,
		marginTop: 20,
		backgroundColor: colors.whiteBlue,
		width: 300, 
		height: 100,
	},

	perfectText: {

	}
});

export default Home;