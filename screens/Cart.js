import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import { BottomButton, CartItem, Text, TopBar } from '../components'
import { FONTS, products } from '../constants';
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMemo, useRef } from 'react';
import BottomSheet from "@gorhom/bottom-sheet";

const Cart = () => {
    const colorScheme = useColorScheme();

    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ["1%", "50%"], []);

    return (
        <SafeAreaView
            style={[styles.page, { backgroundColor: Colors[colorScheme].background }]}
        >
            <FlatList
                data={products}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <CartItem item={item} />}

                ListHeaderComponent={
                    <TopBar
                        leftIcon={
                            <MaterialCommunityIcons
                                name="keyboard-backspace"
                                size={20}
                                color="black"
                            />
                        }
                        middleIcon={<Text style={[FONTS.title, { maxWidth: 150, textAlign: "center", fontWeight: '600' }]}>Cart</Text>}
                        iconColor={Colors.greyBackground}
                    />
                }
                ListFooterComponent={
                    <BottomButton text="Checkout" noInsets />
                }
            />
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                animateOnMount={true}
                backgroundStyle={{ backgroundColor: Colors[colorScheme].background }}
            >
                <View
                    style={[
                        styles.container,
                        { backgroundColor: Colors[colorScheme].background },
                    ]}
                >
                </View>
            </BottomSheet>
        </SafeAreaView>
    )
}

export default Cart

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
})