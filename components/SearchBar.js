import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import {
	MaterialCommunityIcons,
	Feather,
	MaterialIcons,
	Ionicons,
} from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import { useNavigation } from "@react-navigation/native";

const SearchBar = ({ search, setSearch, bottomSheetRef }) => {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.inputWrapper}>
				<Feather
					name="search"
					size={22}
					color="grey"
					style={{ marginLeft: 5, marginRight: 10 }}
				/>
				<TextInput
					value={search}
					onChangeText={(text) => {
						setSearch(text);
					}}
					placeholder="Search..."
					style={styles.input}
				/>
				{search ? (
					<MaterialIcons
						name="clear"
						size={22}
						color="grey"
						onPress={() => setSearch("")}
					/>
				) : null}
			</View>
			{search ? (
				<TouchableOpacity
					style={[styles.button, { backgroundColor: Colors[colorScheme].tint }]}
					onPress={() => navigation.navigate("Search", { search })}
				>
					<Ionicons name="ios-arrow-forward-sharp" size={24} color="white" />
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={[styles.button, { backgroundColor: Colors[colorScheme].tint }]}
					onPress={() => bottomSheetRef.current.expand()}
				>
					<MaterialCommunityIcons
						name="microphone-outline"
						size={24}
						color="white"
					/>
				</TouchableOpacity>
			)}
		</SafeAreaView>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	wrapper: { flexDirection: "row", marginTop: 15, paddingHorizontal: 17 },
	inputWrapper: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: Colors.greyBackground,
		borderRadius: 10,
		flex: 7,
	},
	input: { color: "grey", fontSize: 16, flex: 1 },
	button: {
		flex: 1,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 10,
	},
});
