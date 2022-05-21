import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

const TopBar = ({
	style,
	leftIcon,
	rightIcon,
	leftIconPress,
	rightIconPress,
	iconColor,
}) => {
	return (
		<View style={[styles.wrapper, style]}>
			<TouchableOpacity
				onPress={leftIconPress}
				style={[
					styles.iconButton,
					{
						backgroundColor: iconColor,
					},
				]}
			>
				{leftIcon}
			</TouchableOpacity>
			<TouchableOpacity
				onPress={rightIconPress}
				style={[
					styles.iconButton,
					{
						backgroundColor: iconColor,
					},
				]}
			>
				{rightIcon}
			</TouchableOpacity>
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
		zIndex: 1,
	},
	iconButton: {
		padding: 12,
		borderRadius: "50%",
	},
});
