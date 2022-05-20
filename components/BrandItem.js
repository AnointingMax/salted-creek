import { Image, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const BrandItem = ({ item }) => {
	return (
		<Pressable style={styles.wrapper}>
			<Image source={{ uri: item.image }} style={styles.brandImage} />
			<Text>{item.name}</Text>
		</Pressable>
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
