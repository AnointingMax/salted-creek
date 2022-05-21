import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FONTS, SIZES } from "../constants";
import Text from "./Text";
import Colors from "../constants/Colors";
import { SharedElement } from "react-navigation-shared-element";

const ProductsItem = ({ item }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			style={styles.itemWrapper}
			onPress={() => navigation.push("ProductDetails", { item: item })}
		>
			<SharedElement id={`item.${item.id}.productImage`}>
				<View style={styles.imageWrapper}>
					<Image source={{ uri: item.images[0] }} style={styles.image} />
					<TouchableOpacity style={styles.heartIcon}>
						<Ionicons name="heart-outline" size={25} />
					</TouchableOpacity>
				</View>
			</SharedElement>
			<View style={{ width: "93%" }}>
				<Text style={[FONTS.title, { marginVertical: 5 }]}>{item.title}</Text>
				<Text style={FONTS.price}>${item.price}</Text>
			</View>
		</TouchableOpacity>
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
