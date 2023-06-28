import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Button} from "react-native";
import * as React from "react";

export default function ProfileScreen({navigation}) {
    return (
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{paddingTop: 20, paddingBottom: 10, flexDirection: 'row', backgroundColor: "#f1f1f1"}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  style={styles.navBtn}>

                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../assets/img/icon/home.png')}
                    />

                    <Text>Головна</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Gallery')}
                  style={styles.navBtn}>

                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../assets/img/icon/gallery.png')}
                    />

                    <Text>Галерея</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}
                  style={styles.navBtn}>

                    <Image
                      style={{width: 50, height: 50}}
                      source={require('../../assets/img/icon/profile-a.png')}
                    />

                    <Text style={{color: "#1080fd"}}>Профіль</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.h1}>Реєстрація</Text>

            <View style={{width: "100%", paddingLeft: 20, paddingRight: 20}}>
                <Text>Едектронна почта</Text>
                <TextInput style={styles.input} />

                <Text>Пароль</Text>
                <TextInput style={styles.input} />

                <Text>Пароль (ще раз)</Text>
                <TextInput style={styles.input} />

                <Text>Прізвище</Text>
                <TextInput style={styles.input} />

                <Text>Ім'я</Text>
                <TextInput style={[styles.input,
                    {marginBottom: 30}]} />

                <Button title={"Реєстрація"} />
            </View>
            <Text>Сурікова Ольга Андріївна, ЗІПЗКх-19-1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    navBtn: {
        color: '#8d8d8d',
        flex: 1,
        flexDirection: 'column',
        fontWeight: 700,
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        padding: 5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 4
    }
});