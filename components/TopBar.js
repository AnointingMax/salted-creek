import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const TopBar = ({ leftIcon, rightIcon }) => {
	return (
		<View style={styles.wrapper}>
			<Pressable style={styles.iconButton}>{leftIcon}</Pressable>
			<Pressable style={styles.iconButton}>{rightIcon}</Pressable>
		</View>
	);
};

export default TopBar;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
		paddingHorizontal: 17,
	},
	iconButton: {
		backgroundColor: Colors.greyBackground,
		padding: 12,
		borderRadius: "50%",
	},
});
