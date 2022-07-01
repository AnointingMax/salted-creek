import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { ReviewItem, SectionHeader, Text, TopBar } from "../components";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { FONTS, products, sizes, SIZES } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

const height = SIZES.height;
const width = SIZES.width;

const ProductDetails = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const route = useRoute();

    const [showMore, setShowMore] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [product] = useState(
        products.find((product) => product.id === route?.params?.item.id)
    );

    return (
        <View style={{ flex: 1, backgroundColor: Colors[colorScheme].background }}>
            <TopBar
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: insets.top,
                }}
                iconColor={Colors.white}
                leftIcon={
                    <MaterialCommunityIcons
                        name="keyboard-backspace"
                        size={20}
                        color="black"
                    />
                }
                rightIcon={<SimpleLineIcons name="handbag" size={20} color="black" />}
                leftIconPress={() => navigation.goBack()}
            />
            <FlatList
                data={product.reviews.slice(0, 3)}
                keyExtractor={(_, index) => `${index}`}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 50,
                }}
                bounces={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ReviewItem item={item} />}
                ListHeaderComponent={
                    <View style={{ backgroundColor: Colors[colorScheme].background }}>
                        <SharedElement id={`item.${product.id}.productImage`}>
                            <View
                                style={[
                                    styles.imageWrapper,
                                    {
                                        backgroundColor: Colors.greyBackground,
                                        paddingTop: insets.top,
                                    },
                                ]}
                            >
                                <Image
                                    source={{ uri: product.images[selectedImage] }}
                                    style={{ flex: 1, resizeMode: "contain" }}
                                />
                            </View>
                        </SharedElement>
                        <View style={[styles.topInfo, styles.padding]}>
                            <View style={{ maxWidth: "70%" }}>
                                <Text style={[FONTS.productSubTitle]}>{product.subtitle}</Text>
                                <Text style={[FONTS.h1]}>{product.title}</Text>
                            </View>
                            <View style={{ maxWidth: "30%" }}>
                                <Text style={[FONTS.productSubTitle]}>Price</Text>
                                <Text style={[FONTS.h1]}>${product.price.toFixed(0)}</Text>
                            </View>
                        </View>
                        <FlatList
                            data={product.images}
                            keyExtractor={(_, index) => `${index}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={[styles.padding, { marginTop: 15 }]}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedImage(index)}
                                    style={[
                                        styles.sliderImage,
                                        { backgroundColor: Colors.greyBackground },
                                    ]}
                                >
                                    <Image
                                        source={{ uri: item }}
                                        style={{
                                            flex: 1,
                                            resizeMode: "contain",
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                        <SectionHeader title="Size" />
                        <FlatList
                            data={sizes}
                            keyExtractor={(_, index) => `${index}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={[styles.padding]}
                            renderItem={({ item }) => (
                                <View
                                    style={[
                                        styles.sizeWrapper,
                                        { backgroundColor: Colors.greyBackground },
                                    ]}
                                >
                                    <Text style={{ color: "black" }}>{item}</Text>
                                </View>
                            )}
                        />
                        {product.description && (
                            <>
                                <SectionHeader title="Description" noSubTitle />
                                {showMore ? (
                                    <>
                                        <Text style={[styles.padding, styles.textJustify]}>
                                            {product.description}
                                        </Text>
                                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                            <Text
                                                style={[
                                                    styles.padding,
                                                    styles.textJustify,
                                                    { color: Colors[colorScheme].tint },
                                                ]}
                                            >
                                                Read less
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                ) : (
                                    <>
                                        <Text
                                            style={[styles.padding, styles.textJustify]}
                                            numberOfLines={3}
                                        >
                                            {product.description}
                                        </Text>
                                        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                                            <Text
                                                style={[
                                                    styles.padding,
                                                    styles.textJustify,
                                                    { color: Colors[colorScheme].tint },
                                                ]}
                                            >
                                                Read more
                                            </Text>
                                        </TouchableOpacity>
                                    </>
                                )}
                            </>
                        )}
                        <SectionHeader
                            title="Reviews"
                            onPress={() => navigation.navigate("Reviews", { id: product.id })}
                        />
                    </View>
                }
            />
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
                >
                    <Text style={[FONTS.header]}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    imageWrapper: {
        width: "100%",
        height: height * 0.45,
        marginBottom: 10,
    },
    padding: { paddingHorizontal: 17 },
    topInfo: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sliderImage: {
        width: width * 0.25,
        aspectRatio: 1,
        marginRight: 10,
        borderRadius: 10,
        overflow: "hidden",
    },
    sizeWrapper: {
        padding: 15,
        marginRight: 10,
        borderRadius: 10,
        overflow: "hidden",
        minWidth: width * 0.12,
        justifyContent: "center",
        alignItems: "center",
    },
    textJustify: { textAlign: "justify" },
});
