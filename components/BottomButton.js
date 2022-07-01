import { TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "./Text";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FONTS, SIZES } from "../constants";

const width = SIZES.width;

const BottomButton = ({ text, onPress }) => {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                height: insets.bottom + 50,
                width,
                backgroundColor: Colors[colorScheme].tint,
            }}
        >
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    width,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onPress={onPress}
            >
                <Text style={[FONTS.header]}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomButton;
