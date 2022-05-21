import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import {
	Text,
	ProductsItem,
	TopBar,
	SearchBar,
	SectionHeader,
	BrandItem,
} from "../components";
import { brands, FONTS, products } from "../constants";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Home = () => {
	const colorScheme = useColorScheme();
	const [search, setSearch] = useState("");
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
					<>
						<TopBar
							leftIcon={
								<MaterialCommunityIcons
									name="segment"
									size={20}
									color="black"
								/>
							}
							rightIcon={
								<SimpleLineIcons name="handbag" size={20} color="black" />
							}
						/>
						<Text style={[FONTS.h1, { paddingHorizontal: 17 }]}>Hello</Text>
						<Text
							style={[
								FONTS.h2,
								{ paddingHorizontal: 17, color: Colors[colorScheme].tint },
							]}
						>
							Welcome to Saltedcreek Emporium
						</Text>
						<SearchBar search={search} setSearch={setSearch} />
						<SectionHeader title="Choose Brand" />
						<FlatList
							data={brands}
							keyExtractor={(item) => `${item.name}`}
							horizontal
							renderItem={({ item }) => <BrandItem item={item} />}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ paddingLeft: 17 }}
						/>
						<SectionHeader title="New Arrivals" />
					</>
				}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
});
