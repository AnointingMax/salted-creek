import { Image, StyleSheet, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import Text from "./Text";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import StarRating from "react-native-star-rating";
import { FONTS } from "../constants";

const ReviewItem = ({ item, reviewsPage }) => {
	const colorScheme = useColorScheme();
	return (
		<View
			style={[
				styles.padding,
				styles.reviewWrapper,
				{ marginBottom: reviewsPage ? 30 : 15 },
			]}
		>
			<View style={styles.reviewdetails}>
				<Image source={{ uri: item.user.image }} style={styles.reviewImage} />
				<View style={styles.info}>
					<View>
						<Text style={[FONTS.h2, { marginBottom: 3, fontWeight: "600" }]}>
							<Text>{item.user.firstName} </Text>
							<Text>{item.user.lastName}</Text>
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<EvilIcons
								name="clock"
								size={24}
								color={Colors[colorScheme].text}
								style={{ marginRight: 3 }}
							/>
							<Text style={{ fontSize: 13 }}>{item.time}</Text>
						</View>
					</View>
					<View>
						<Text style={{ marginBottom: 2 }}>
							<Text style={[FONTS.h2, { marginBottom: 3, fontWeight: "600" }]}>
								{item.rating}
							</Text>
							<Text> rating</Text>
						</Text>
						<StarRating
							disabled={true}
							maxStars={5}
							rating={item.rating}
							starSize={15}
							fullStarColor={Colors[colorScheme].tint}
							emptyStarColor={Colors.white}
						/>
					</View>
				</View>
			</View>
			<Text numberOfLines={reviewsPage ? 3 : 2} style={[styles.textJustify]}>
				{item.review}
			</Text>
		</View>
	);
};

export default ReviewItem;

const styles = StyleSheet.create({
	padding: { marginHorizontal: 17 },
	reviewWrapper: {
		marginBottom: 15,
	},
	reviewdetails: { flexDirection: "row" },
	reviewImage: {
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		resizeMode: "contain",
		marginRight: 10,
		marginBottom: 5,
	},
	info: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
	},
	textJustify: { textAlign: "justify" },
});
