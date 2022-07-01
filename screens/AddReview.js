import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import useColorScheme from '../hooks/useColorScheme';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomButton, FormElement, Text, TopBar } from '../components';
import { FONTS } from '../constants';
import Colors from '../constants/Colors';
import { Formik } from 'formik';
import * as Yup from "yup";

const AddReview = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const route = useRoute();

    const validationSchema = Yup.object().shape({
        review: Yup.string(),
        star: Yup.number().required("A star rating is required").positive().min(0).max(5),
    });


    return (
        <SafeAreaView style={[styles.page, {
            backgroundColor: Colors[colorScheme].background,
        }]}>
            <Formik
                initialValues={{ review: '', star: 0 }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log({ ...values, productID: route?.params?.id },);
                    navigation.pop()
                }}
            >
                {({ handleChange, setFieldValue, handleSubmit, values }) => (
                    <>
                        <ScrollView bounces={false} style={{ marginBottom: 50 }}>
                            <TopBar
                                iconColor={Colors.greyBackground}
                                style={{ marginBottom: 20 }}
                                leftIcon={
                                    <MaterialCommunityIcons
                                        name="keyboard-backspace"
                                        size={20}
                                        color="black"
                                    />
                                }
                                middleIcon={
                                    <Text style={[FONTS.header, { fontWeight: "600" }]}>
                                        Add Review
                                    </Text>
                                }
                                leftIconPress={() => navigation.goBack()}
                            />
                            <FormElement
                                type="star"
                                name="Star"
                                value={values.star}
                                setValue={setFieldValue}
                            />
                            <FormElement
                                type="text"
                                name="Review"
                                value={values.review}
                                setValue={handleChange}
                                placeholder="What do you think?"
                                multiline={true}
                                placeholderTextColor="#7C828C"
                            />

                        </ScrollView>
                        <BottomButton text="Submit Review" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
}

export default AddReview

const styles = StyleSheet.create({
    page: { flex: 1 },
    padding: { paddingHorizontal: 17 },
})