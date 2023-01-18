/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { AddReview, Cart, Home, ProductDetails, Reviews, Search, WishList } from '../screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createSharedElementStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} sharedElements={(route, otherRoute, showing) => {
                const { item } = route.params;
                return [
                    { id: `item.${item.id}.productImage` },
                ];
            }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="Reviews" component={Reviews} options={{ headerShown: false }} />
            <Stack.Screen name="AddReview" component={AddReview} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: 7,
                    borderTopWidth: 1,
                }
            }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={() => ({
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="ios-home-outline" size={28} color={color} />
                })}
            />
            <BottomTab.Screen
                name="WishList"
                component={WishList}
                options={{
                    title: 'WishList',
                    tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={28} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="handbag" size={28} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabFour"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Four',
                    tabBarIcon: ({ color }) => <Ionicons name="ios-wallet-outline" size={28} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
