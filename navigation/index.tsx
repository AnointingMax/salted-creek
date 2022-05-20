/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Home } from '../screens';
import ModalScreen from '../screens/ModalScreen';


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
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
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
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={28} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Three',
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
