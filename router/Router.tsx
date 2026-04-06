import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Home({ navigation }: any) {


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text
                    style={styles.title}
                >Home Screen</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('WeatherApp')}>
                    <Text
                        style={styles.button}
                    >Погода</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Calculator')}>
                    <Text
                        style={styles.button}>Калькулятор</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Clicker')}>
                    <Text
                        style={styles.button}
                    >Кликер</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('gameCheckers')}>
                    <Text
                        style={styles.button}
                    >Шашки</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Lift')}>
                    <Text
                        style={styles.button}
                    >Code Run Лифт</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('shakerSort')}>
                    <Text
                        style={styles.button}
                    >Шейкерная сортировка</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('cafeMachine')}>
                    <Text
                        style={styles.button}
                    >Кафе автомат</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PeacefulRooks')}>
                    <Text
                        style={styles.button}
                    >Мирные ладьи</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        padding: 20,
        fontSize: 30,
        fontWeight: 300
    },
    button: {
        padding: 30,
        margin: 30,
        fontSize: 20,
        fontWeight: 600,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 50,
    }
})