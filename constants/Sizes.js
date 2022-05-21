import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const SIZES = {
	padding: 10,
	width,
	height,
};

export default SIZES;
