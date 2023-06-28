import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./assets/components/ProfileScreen";
import HomeScreen from "./assets/components/HomeScreen";
import GalleryScreen from "./assets/components/GalleryScreen";

const Stack = createNativeStackNavigator();

function LogoTitle({props}) {
    return (
        <View>
            <Image
                style={{ width: 165, height: 50 }}
                source={require('./assets/img/university-colored.png')}
            />
        </View>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: () => (
                        <Text style={styles.h1}>FirstMobilApp</Text>
                    ),
                    headerBackVisible: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
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

export default App;