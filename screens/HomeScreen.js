import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const HomeScreen = (props) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");

	const loadProfile = async () => {
		const token = await AsyncStorage.getItem("token");
		if (!token) {
			props.navigation.navigate("Login");
		}

		const decoded = jwtDecode(token);
		setFullName(decoded.fullName);
		setEmail(decoded.email);
	};

	const logout = async (props) => {
		await AsyncStorage.removeItem("token")
			.then(() => {
				// use replace to navigate to login screen and not nav back
				props.navigation.replace("Login");
			})
			.catch((err) => console.log(err));
		props.navigation.navigate("Login");
	};

	useEffect(() => {
		loadProfile();
	});
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>
					Welcome {fullName ? fullName : ""}
				</Text>
			</View>
			<View>
				<Text style={styles.text}>
					Your Email: {email ? email : ""}
				</Text>
			</View>
			<View>
				<Button title="Logout" onPress={() => logout(props)} />
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
	},
	text: {
		fontSize: 22,
	},
});
