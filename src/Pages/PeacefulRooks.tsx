import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react";
import BlockField_by_Rooks from "../Components/_BlockField_by_Rooks";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface massType {
    id: number,
    color: string
}
const generateField = (count: number) => {
    let arr: massType[][] = [];

    let incr = 0;

    for (let i = 0; i < count; i++) {
        arr[i] = [];
        
        for (let j = 0; j < count; j++) {
            incr = Number(String(i+1)+String(j+1))
            arr[i][j] = { id: incr , color: 'white'};
        }
    }

    return arr
}


const shakerSort = (arrId: number[]) => {
    let arr = arrId
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
    return(arr);
}


const PeacefulRooks = () => {
    const [inpVal, setInpVal] = useState<number>(0);
    const [field, setField] = useState<massType[][]>(generateField(inpVal));

    const handleChange = (inp: number) => {
        setInpVal(inp)
        setField(generateField(inp))
    }
    const handleClick = (id: number) => {
        const newField = field.map(row => row.map(cell => ({ ...cell })));


        for (let i = 0; i < newField.length; i++){
            for(let j =0; j< newField.length; j++){
                if(newField[i][j].id == id){
                    if(newField[i][j].color == 'white'){
                        newField[i][j].color = 'green'
                    }else{
                        newField[i][j].color = 'white'
                    }
                    
                }
            }
        }

        setField(newField)
    }

    const turnField = () => {
        
        const fld = field.map(row => row.map(cell => ({ ...cell })));
        let N = inpVal;
        let mass = [];
        for(let i = 0; i<N;i++){
            for(let j = 0; j<N;j++){
                if (fld[i][j].color == 'green'){
                    mass.push(fld[i][j].id)
                }
            }
        }

        let newI = [];
        let pastI = [];
        let newJ = [];
        let newID = [];

        for (let i = 0; i<mass.length; i++){
            let ind = String(mass[i])
            newI.push(+ind[1])
            pastI.push(+ind[0])
        }

        for(let i = 0;i<pastI.length;i++){
            newJ.push(N+1-pastI[i])
            let newid = Number(String(newI[i])+String(newJ[i]))
            newID.push(newid)
        }

        let newSortId = shakerSort(newID);

        console.log("newSortId")
        console.log(newSortId)

        generatedNewField(newSortId)
    }


    const generatedNewField = (id: number[]) => {
        const newField = field.map(row => row.map(cell => ({ ...cell })));


        for (let i = 0; i < newField.length; i++){
            for(let j =0; j< newField.length; j++){
                if(newField[i][j].color != 'white'){
                    newField[i][j].color = 'white'
                }
                for(let k = 0; k<id.length; k++){
                    if(newField[i][j].id == id[k]){
                        newField[i][j].color = 'orange'
                    }

                }
            }
        }

        setField(newField)
    }

    return (
        <main style={{}}>
            <input type="number" placeholder="Укажите размер поля N одним числом" value={inpVal} onChange={(e) => handleChange(+e.target.value)} 
            style={{margin: '10px 0 0 100px'}} />
            <div style={{
                margin: '50px 0 0 100px',
                display: 'flex',
                flexWrap: 'wrap',
                width: 40 * inpVal,
                height: 40 * inpVal
            }}>
                {field.map((row, key) => (
                    row.map((column, index) => (
                        <button 
                        key={key + index}
                        style={{
                            width: '40px',
                            height: '40px',
                            margin: 0,
                            padding: 0,
                            border: '1px solid black',
                            backgroundColor: column.color,
                            justifyContent: "none",
                        }}
                        onClick={() => (handleClick(column.id))}>
                            {column.id}
                        </button>
                    ))
                ))}
            </div>
            <button style={{marginTop: 50, marginLeft: 100}} onClick={turnField}> повернуть </button>
        </main>
    )
}

export default PeacefulRooks