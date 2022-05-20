import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";

const SearchBar = ({ search, setSearch }) => {
	const colorScheme = useColorScheme();

	return (
		<View style={styles.wrapper}>
			<View style={styles.inputWrapper}>
				<Feather
					name="search"
					size={22}
					color="grey"
					style={{ marginRight: 10 }}
				/>
				<TextInput
					value={search}
					onChangeText={(text) => {
						setSearch(text);
					}}
					placeholder="Search..."
					style={styles.input}
				/>
			</View>
			<Pressable
				style={[styles.button, { backgroundColor: Colors[colorScheme].tint }]}
			>
				<MaterialCommunityIcons
					name="microphone-outline"
					size={24}
					color="white"
				/>
			</Pressable>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	wrapper: { flexDirection: "row", marginTop: 15, paddingHorizontal: 17 },
	inputWrapper: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: Colors.greyBackground,
		borderRadius: 10,
		flex: 7,
	},
	input: { color: "grey", fontSize: 16 },
	button: {
		flex: 1,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 10,
	},
});
