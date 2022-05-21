import React from "react";
import { Text as DefaultText } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Text = ({ style, children }) => {
	const colorScheme = useColorScheme();
	return (
		<DefaultText style={[{ color: Colors[colorScheme].text }, style]}>
			{children}
		</DefaultText>
	);
};

export default Text;
