import React, { useMemo, useRef, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import {
    Text,
    ProductsItem,
    TopBar,
    SearchBar,
    SectionHeader,
    BrandItem,
    Animation,
} from "../components";
import { brands, FONTS, products } from "../constants";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    const [search, setSearch] = useState("");

    // ref
    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ["1%", "100%"], []);

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
                            rightIconPress={() => navigation.jumpTo("Cart")}
                            iconColor={Colors.greyBackground}
                        />
                        <Text style={[FONTS.h1, styles.padding]}>Hello</Text>
                        <Text
                            style={[
                                FONTS.h2,
                                styles.padding,
                                { color: Colors[colorScheme].tint },
                            ]}
                        >
                            Welcome to Saltedcreek Emporium
                        </Text>
                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                            bottomSheetRef={bottomSheetRef}
                        />
                        <SectionHeader title="Choose Brand" />
                        <FlatList
                            data={brands}
                            keyExtractor={(item) => `${item.name}`}
                            horizontal
                            renderItem={({ item }) => <BrandItem item={item} />}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.padding}
                        />
                        <SectionHeader title="New Arrivals" />
                    </>
                }
            />
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                animateOnMount={true}
                backgroundStyle={{ backgroundColor: Colors[colorScheme].background }}
            >
                <View
                    style={[
                        styles.container,
                        { backgroundColor: Colors[colorScheme].background },
                    ]}
                >
                    <Animation bottomSheetRef={bottomSheetRef} />
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    padding: { paddingHorizontal: 17 },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});
