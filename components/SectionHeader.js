import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FONTS } from "../constants";
import Text from "./Text";

const SectionHeader = ({ title, subtitle, noSubTitle, onPress }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={FONTS.header}>{title}</Text>
			{!noSubTitle && (
				<TouchableOpacity onPress={onPress}>
					<Text style={{ opacity: 0.4 }}>
						{subtitle ? subtitle : "View All"}
					</Text>
				</TouchableOpacity>
			)}
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
