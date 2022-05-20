import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FONTS, SIZES } from "../constants";
import Text from "./Text";
import Colors from "../constants/Colors";

const ProductsItem = ({ item }) => {
	return (
		<View style={styles.itemWrapper}>
			<View style={styles.imageWrapper}>
				<Image source={{ uri: item.images[0] }} style={styles.image} />
				<Ionicons name="heart-outline" size={28} style={styles.heartIcon} />
			</View>
			<View style={{ width: "93%" }}>
				<Text style={[FONTS.title, { marginVertical: 5 }]}>{item.title}</Text>
				<Text style={FONTS.price}>${item.price}</Text>
			</View>
		</View>
	);
};

export default ProductsItem;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		aspectRatio: 0.8,
	},
	heartIcon: {
		position: "absolute",
		top: SIZES.padding,
		right: SIZES.padding * 1.5,
	},
	itemWrapper: {
		flex: 1,
		alignItems: "center",
		marginBottom: 15,
	},
	imageWrapper: {
		width: "93%",
		alignItems: "center",
		backgroundColor: Colors.greyBackground,
		borderRadius: 10,
		overflow: "hidden",
		alignSelf: "center",
	},
});
