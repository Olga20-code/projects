import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const navigation = useNavigation();
export default function Navigation(navigation) {
    return (
        <View style={{backgroundColor: "#ccc"}}>
            <Text
                title="Головна"
                onPress={() => navigation.navigate('Home')}
                style={{backgroundColor: "#ccc"}}
            />
            <Button
                title="Галерея"
                onPress={() => navigation.navigate('Gallery')}
            />
            <Button
                title="Профіль"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        fontWeight: "bold"
    },
    navBtn: {
        textAlign: 'center',
        color: '#8d8d8d',
        flex: 1,
        fontWeight: 700
    },
});