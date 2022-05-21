import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const BrandItem = ({ item }) => {
	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.wrapper}>
			<Image source={{ uri: item.image }} style={styles.brandImage} />
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
};

export default BrandItem;

const styles = StyleSheet.create({
	wrapper: {
		marginRight: 10,
		backgroundColor: Colors.greyBackground,
		borderRadius: 10,
		paddingVertical: 5,
		paddingHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	brandImage: {
		width: 40,
		aspectRatio: 1,
		resizeMode: "contain",
		marginRight: 7,
	},
});
