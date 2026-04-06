import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";

const shakerSort = () => {

    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<any>();

    const handleClick = () => {
        let arr = input.split(',')
        let left = 0;
        let right = arr.length - 1;
        let swapped = true;

        while (swapped) {
            swapped = false;

            // Проход слева направо (как в пузырьковой)
            for (let i = left; i < right; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // ES6 swap
                    swapped = true;
                }
            }
            right--; // Максимальный элемент на месте

            if (!swapped) break; // Если не было обменов, массив отсортирован

            swapped = false;
            // Проход справа налево
            for (let i = right; i > left; i--) {
                if (arr[i] < arr[i - 1]) {
                    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                    swapped = true;
                }
            }
            left++; // Минимальный элемент на месте
        }
        setResult(arr);
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
                cols={30}
                placeholder={`Введите масив для сортировки.\nЧерез запятую без пробелов.`} />

            <button style={{
                margin: '10px auto'
            }}
                onClick={handleClick}
            >Сортировать</button>

            <span style={{
                display: 'block',
                margin: '10px auto'
            }}>{result}</span>

        </main>
    )
}

export default shakerSort