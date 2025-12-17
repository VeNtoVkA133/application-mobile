import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import Square from "./_Square";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler.js";
const GameCheckers = () => {
    const CreateField = () =>{
        let test = [];
        let indef = 10;
        for(let i=0;i<8;i++){
            let test2 =[];
            for(let j =0; j<8;j++){
                if (j %2){
                    if (i<3){
                        test2.push(<Square id={indef} colorSquare="#854e05" styleImg='black' nextg={nextG}/>)
                    }else if (i>4){
                        test2.push(<Square id={indef} colorSquare="#854e05" styleImg='white' nextg={nextG}/>)
                    }else{
                        test2.push(<Square id={indef} colorSquare="#854e05" styleImg='' nextg={nextG}/>)
                    }
                }else{
                    test2.push(<Square id={indef} colorSquare="#faeddc" styleImg='' nextg={nextG}/>)
                }
            }
            if(i%2){
                test.push(<div style={{display: 'flex', flexDirection: 'row-reverse'}}>{test2}</div>)
            }else{
                test.push(<div style={{display: 'flex', flexDirection: 'row'}}>{test2}</div>)
            }

        }

        return test
    }

    const nextG = (col: string, id:number) => {
        if(col == "black"){
            console.log("res");
            alert(col);
        }else if(col == 'white'){
            alert(col);
        }
    }



    return (
        <div 
        style={{
            padding: '5px',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {CreateField()}

        </div>
    )
}

export default GameCheckers

