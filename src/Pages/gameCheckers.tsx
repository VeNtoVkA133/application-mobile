import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import Square from "../Components/_Square";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler.js";
const GameCheckers = () => {

    const nextG = () => {
        console.log("NeeeeeextGGGGG")
        const newField = field.map(item => {
            if (item.props.id === 12) { // Пример изменения
                return { ...item.props, styleImg: "black" };
            }
            return item;
        });
        setField(newField);
    }

    const CreateField = () =>{
        let test = [];
        let indef = 8;
        for(let i=0;i<8;i++){
            indef = indef+2;

            if(i!%2 && i != 0){
                for(let j =0; j<8;j++){
                    indef = indef+1
                    if (j %2){
                        if (i<3){
                            test.push(<Square id={indef} colorSquare="#faeddc" styleImg='' nextg={nextG}/>)
                        }else if (i>4){
                            test.push(<Square id={indef} colorSquare="#faeddc" styleImg='' nextg={nextG}/>)
                        }else{
                            test.push(<Square id={indef} colorSquare="#faeddc" styleImg='' nextg={nextG}/>)

                        }
                    }else{
                        test.push(<Square id={indef} colorSquare="#854e05" styleImg='' nextg={nextG}/>)
                    }
                }
            }else{
                for(let j =0; j<8;j++){
                    indef = indef+1
                    if (j %2){
                        if (i<3){
                            test.push(<Square id={indef} colorSquare="#854e05" styleImg='' nextg={nextG}/>)
                        }else if (i>4){
                            test.push(<Square id={indef} colorSquare="#854e05" styleImg='' nextg={nextG}/>)
                        }else{
                            test.push(<Square id={indef} colorSquare="#854e05" styleImg='' nextg={nextG}/>)

                        }
                    }else{
                        test.push(<Square id={indef} colorSquare="#faeddc" styleImg='' nextg={nextG}/>)
                    }
                }
            }

        }
        
        return test}

    const [field, setField] = useState(CreateField);
    return (
        <div 
        style={{
            padding: '5px',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {field}
        </div>
    )
}

export default GameCheckers

