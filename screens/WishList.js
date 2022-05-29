import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { ProductsItem, Text, TopBar } from "../components";
import {
	MaterialCommunityIcons,
	SimpleLineIcons,
	FontAwesome,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { FONTS, products } from "../constants";

const WishList = () => {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();
	const route = useRoute();

	return (
		<SafeAreaView
			style={[styles.page, { backgroundColor: Colors[colorScheme].background }]}
		>
			<FlatList
				data={products}
				numColumns={2}
				keyExtractor={(item) => `${item.id}`}
				columnWrapperStyle={{ paddingHorizontal: 10 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <ProductsItem item={item} />}
				ListHeaderComponent={
					<View>
						<TopBar
							iconColor={Colors.greyBackground}
							leftIcon={
								<MaterialCommunityIcons
									name="segment"
									size={20}
									color="black"
								/>
							}
							middleIcon={
								<Text style={[FONTS.header, { fontWeight: "600" }]}>
									Wishlist
								</Text>
							}
							rightIcon={
								<SimpleLineIcons name="handbag" size={20} color="black" />
							}
						/>
						<View
							style={[
								styles.padding,
								{
									marginVertical: 10,
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								},
							]}
						>
							<View>
								<Text style={[FONTS.header]}>{products.length} Items</Text>
								<Text style={[FONTS.productSubTitle]}>in wishlist</Text>
							</View>
							{/* <TouchableOpacity
								style={{
									flexDirection: "row",
									backgroundColor: Colors.greyBackground,
									paddingHorizontal: 10,
									paddingVertical: 8,
									borderRadius: 10,
									alignItems: "center",
								}}
							>
								<FontAwesome name="pencil" size={14} color="black" />
								<Text
									style={[
										FONTS.header,
										{ marginLeft: 3, fontSize: 16, color: "black" },
									]}
								>
									Edit
								</Text>
							</TouchableOpacity> */}
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
};

export default WishList;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	padding: { paddingHorizontal: 17 },
});
