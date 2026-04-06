import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";

const Lift = () => {
    
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number>();

    const handleClick = () => {
        const lines = input.trim().split('\n');
        const K = parseInt(lines[0], 10);
        const N = parseInt(lines[1], 10);
        let seconds = 0;

        const allPeople = [];
        for (let i = 2; i < 2 + N; i++) {
            allPeople.push(parseInt(lines[i]));
        }

        let thisPeople = 0;
        let prevTrips = 0;

        for (let i = N; i >= 1; i--) {
            thisPeople += allPeople[i - 1];

            const trips = Math.ceil(thisPeople / K);

            const newTrips = trips - prevTrips;

            if (newTrips > 0) {
                seconds += 2 * i * newTrips;
            }

            prevTrips = trips;
        }

        setResult(seconds);
        
    }
    return (
        <main style={{display: 'flex', flexDirection: 'column'}}>
            <textarea
            style={{
                margin: '0 auto'
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            cols={50}
            placeholder={`Введите данные:
            Пример:
            Вместимость лифта "K"
            Количество этажей "N"
            Количество людей на 1 этаже
            Количество людей на 2 этаже
            Количество людей на "N" этаже`} />

            <button style={{
                margin: '10px auto'
            }}
            onClick={handleClick}
            >Расчитать скорость</button>

            <span style={{
                display: 'block',
                margin: '10px auto'
            }}>{result}</span>

        </main>
    )
}

export default Lift