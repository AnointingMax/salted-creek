import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { BrandItem, ProductsItem, Text, TopBar } from "../components";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { brands, FONTS, products } from "../constants";

const Search = () => {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();
	const route = useRoute();

	var middleIcon = null;
	if (route?.params?.brand) {
		const brand = brands.find((brand) => brand.name === route.params.brand);
		middleIcon = <BrandItem item={brand} noName />;
	} else if (route?.params?.search) {
		const search = route?.params?.search;
		middleIcon = (
			<Text style={{ maxWidth: 150, textAlign: "center" }}>{search}</Text>
		);
	}

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
									name="keyboard-backspace"
									size={20}
									color="black"
								/>
							}
							rightIcon={
								<SimpleLineIcons name="handbag" size={22} color="black" />
							}
							leftIconPress={() => navigation.goBack()}
							middleIcon={middleIcon}
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
								<Text style={[FONTS.productSubTitle]}>Available in Stock</Text>
							</View>
							<TouchableOpacity
								style={{
									flexDirection: "row",
									backgroundColor: Colors.greyBackground,
									paddingHorizontal: 8,
									paddingVertical: 5,
									borderRadius: 10,
									alignItems: "center",
								}}
							>
								<MaterialIcons name="sort" size={24} color="black" />
								<Text
									style={[
										FONTS.header,
										{ marginLeft: 1, fontSize: 16, color: "black" },
									]}
								>
									Sort
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
};

export default Search;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	padding: { paddingHorizontal: 17 },
});
