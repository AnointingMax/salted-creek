import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { ReviewItem, Text, TopBar } from "../components";
import Colors from "../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import { FONTS, products } from "../constants";
import StarRating from "react-native-star-rating";

const Reviews = () => {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();
	const route = useRoute();

	const [reviews] = useState(
		products.find((product) => product.id === route?.params?.id).reviews
	);

	const average = reviews
		.reduce(function (avg, value, _, { length }) {
			return avg + value.rating / length;
		}, 0)
		.toFixed(1);

	return (
		<SafeAreaView
			style={[styles.page, { backgroundColor: Colors[colorScheme].background }]}
		>
			<FlatList
				data={reviews}
				keyExtractor={(_, index) => `${index}`}
				bounces={false}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <ReviewItem item={item} reviewsPage />}
				ListHeaderComponent={
					<>
						<TopBar
							iconColor={Colors.greyBackground}
							leftIcon={
								<MaterialCommunityIcons
									name="keyboard-backspace"
									size={20}
									color="black"
								/>
							}
							middleIcon={
								<Text style={[FONTS.header, { fontWeight: "600" }]}>
									Reviews
								</Text>
							}
							leftIconPress={() => navigation.goBack()}
						/>
						<View
							style={[
								styles.padding,
								{
									marginTop: 10,
									marginBottom: 15,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								},
							]}
						>
							<View>
								<Text style={[FONTS.header, { marginBottom: 3 }]}>
									{reviews.length} Reviews
								</Text>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Text style={[FONTS.productSubTitle]}>{average}</Text>
									<StarRating
										disabled={true}
										maxStars={5}
										rating={average}
										starSize={12}
										fullStarColor={Colors[colorScheme].tint}
										emptyStarColor={Colors.white}
									/>
								</View>
							</View>
							<TouchableOpacity
								style={{
									flexDirection: "row",
									backgroundColor: Colors[colorScheme].tint,
									paddingHorizontal: 10,
									paddingVertical: 7,
									borderRadius: 5,
									alignItems: "center",
								}}
							>
								<MaterialCommunityIcons
									name="square-edit-outline"
									size={24}
									color={Colors[colorScheme].text}
								/>
								<Text style={[FONTS.header, { marginLeft: 1, fontSize: 16 }]}>
									Add Review
								</Text>
							</TouchableOpacity>
						</View>
					</>
				}
			/>
		</SafeAreaView>
	);
};

export default Reviews;

const styles = StyleSheet.create({
	page: { flex: 1 },
	padding: { paddingHorizontal: 17 },
});
