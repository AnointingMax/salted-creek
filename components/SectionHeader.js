import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FONTS } from "../constants";
import Text from "./Text";

const SectionHeader = ({ title }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={FONTS.header}>{title}</Text>
			<TouchableOpacity>
				<Text style={{ opacity: 0.4 }}>View All</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SectionHeader;

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 17,
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 15,
		alignItems: "center",
	},
});
