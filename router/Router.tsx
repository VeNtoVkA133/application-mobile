import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Home({ navigation }: any) {


    return (
        <ScrollView>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity>
                    <a href='https://cloud.mail.ru/public/Ttto/sGbdL6bJu?weblink=Ttto/sGbdL6bJu' target='_blank' rel="noopener noreferrer" style={styles.title}>Home Screen</a>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notes')}>
                    <Text style={styles.button}>Заметки</Text>
                </TouchableOpacity>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('WeatherApp')}>
                        <Text style={styles.button}>Погода</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Calculator')}>
                        <Text style={styles.button}>Калькулятор</Text>
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
                </View>
                <View style={styles.container}>
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('C3pgame')}>
                        <Text
                            style={styles.button}
                        >C3pgame</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('graph')}>
                        <Text
                            style={styles.button}
                        >Графики</Text>
                    </TouchableOpacity>
                </View>
            </div>
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
        fontWeight: 300,
        color: "gray",
        textDecorationLine: "none",
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