import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Text from "./Text";

const Animation = ({ bottomSheetRef }) => {
	const [isPressed, setIsPressed] = useState(true);

	const animated = new Animated.Value(0);
	const opacityA = new Animated.Value(1);

	const runAnimation = () => {
		Animated.loop(
			Animated.parallel([
				Animated.timing(animated, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(opacityA, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			])
		).start();
	};

	const onPress = () => {
		setIsPressed((prevState) => !prevState);
	};

	const stopAnimation = () => {
		Animated.loop(
			Animated.parallel([Animated.timing(animated), Animated.timing(opacityA)])
		).stop();
	};

	const micButton = () => {
		if (isPressed) {
			runAnimation();
			return (
				<>
					<TouchableOpacity onPress={onPress}>
						<Animated.View
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								backgroundColor: "rgba(153,0,0,0.4)",
								opacity: opacityA,
								transform: [
									{
										scale: animated,
									},
								],
							}}
						/>
					</TouchableOpacity>
				</>
			);
		} else {
			return (
				<View style={{ alignItems: "center" }}>
					<TouchableOpacity onPress={onPress}>
						<View
							style={{
								width: 100,
								height: 100,
								borderRadius: 50,
								backgroundColor: "rgba(153,0,0,0.4)",
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setIsPressed(true);
							bottomSheetRef.current.close();
						}}
					>
						<Text style={{ marginTop: 50 }}>Cancel</Text>
					</TouchableOpacity>
				</View>
			);
		}
	};

	return micButton();
};

export default Animation;

const styles = StyleSheet.create({});
