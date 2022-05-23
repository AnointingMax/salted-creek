import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const TopBar = ({
	style,
	leftIcon,
	rightIcon,
	leftIconPress,
	rightIconPress,
	middleIcon,
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
			{middleIcon}
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
		alignItems: "center",
		marginBottom: 10,
		paddingHorizontal: 17,
		zIndex: 1,
	},
	iconButton: {
		padding: 12,
		borderRadius: 100,
	},
});
