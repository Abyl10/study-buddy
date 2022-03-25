export const styles = StyleSheet.create({
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

	///////////username//////////
	inputUsername: {
		marginHorizontal: 24,
		backgroundColor: "#F6F7FA",
		height: 56,
		marginTop: 69,
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
		marginTop: 25,
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