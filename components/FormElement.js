import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Text from './Text'
import StarRating from "react-native-star-rating";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FONTS } from '../constants';

const FormElement = ({ name, type, value, setValue, ...others }) => {
    const colorScheme = useColorScheme();

    if (type === "text") return (
        <View style={styles.wrapper}>
            <Text style={[styles.name, FONTS.title]}>{name}</Text>
            <TextInput value={value} onChangeText={setValue(name.toLowerCase())} {...others} style={styles.textArea} />
        </View>
    )
    if (type === "star") return (
        <View style={styles.wrapper}>
            <Text style={[styles.name, FONTS.title]}>{name}</Text>
            <StarRating
                rating={value}
                starSize={45}
                fullStarColor={Colors[colorScheme].tint}
                selectedStar={(rating) => setValue(name.toLowerCase(), rating)}
                halfStarEnabled={true}
            />
        </View>
    )
}

export default FormElement

const styles = StyleSheet.create({
    wrapper: { paddingHorizontal: 17, marginBottom: 20 },
    name: { marginBottom: 10 },
    textArea: {
        borderRadius: 5,
        backgroundColor: "#F3F3F9",
        padding: 15,
        color: "#7C828C",
        paddingTop: 15,
        minHeight: 200
    }
})