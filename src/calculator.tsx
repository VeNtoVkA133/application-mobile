import { ImageBackground, Text, View } from "react-native";
import React, { useState } from "react";

export default function Index() {

    const [btn, setRes] = React.useState("")

    const ClBtn = (n: string) => {
        let ch = btn;
        setRes(ch + n);
    }
    const Calculate = (n: string) => {
        let arr = n.split(" ");
        let arrN = [];
        let symmSymb = 0;
        let sym = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i != 0 && i! % 2) {
                sym++
                if (arr[i] == "*" || arr[i] == "/") {
                    symmSymb++;
                }
            }
        }
        //console.log("symmSymb " + symmSymb);
        let check = true;//arr.length / 2 - 1;
        while (check) {
            //console.log("1");
            while (symmSymb > 0) {
                console.log("2");
                for (let i = 0; i < arr.length; i++) {
                    //console.log("3");
                    if (i != 0 && i !% 2) {
                        //console.log("4");
                        if (arr[i] == "*" || arr[i] == "/") {
                            //console.log("5");
                            symmSymb--;
                            sym--;
                            let r;
                            //console.log("arr 1 = " + arr);
                            if (arr[i] == "*") {
                                r = Number(arr[i - 1]) * Number(arr[i + 1]);
                            } else if (arr[i] == "/") {
                                r = Number(arr[i - 1]) / Number(arr[i + 1]);
                            }
                            arr[i - 1] = String(r);
                            arr.splice(i, 2);
                            //console.log("arr 2 = " + arr);
                            break;
                        }
                    }
                }
            }
            if (sym > 0){
                check = true;
            }else{
                check = false;
            }
            for (let i = 0; i < arr.length; i++) {
                if (i != 0 && i! % 2) {
                    if (arr[i] == "+" || arr[i] == "-") {
                        sym--;
                        let r;
                        if (arr[i] == "+") {
                            r = Number(arr[i - 1]) + Number(arr[i + 1]);
                        } else if (arr[i] == "-") {
                            r = Number(arr[i - 1]) - Number(arr[i + 1]);
                        }
                        arr[i - 1] = String(r);
                        arr.splice(i, 2);
                        break;
                    }
                }
            }
        }
        setRes(arr[0]);

    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <span style={{ display: 'block', margin: '0 0 10px 0' }}>{btn}</span>
            <div style={{ display: "flex" }}>
                <div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>

                        <button
                            className="btn"
                            onClick={() => ClBtn("1")}
                        >1</button>

                        <button
                            className="btn"
                            style={{
                                margin: " 0 15px"
                            }}
                            onClick={() => ClBtn("2")}
                        >2</button>

                        <button
                            className="btn"
                            onClick={() => ClBtn("3")}
                        >3</button>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "15px 0"
                    }}>
                        <button
                            className="btn"
                            onClick={() => ClBtn("4")}
                        >4</button>

                        <button
                            className="btn"
                            style={{
                                margin: " 0 15px"
                            }}
                            onClick={() => ClBtn("5")}
                        >5</button>

                        <button
                            className="btn"
                            onClick={() => ClBtn("6")}
                        >6</button>

                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <button
                            className="btn"
                            onClick={() => ClBtn("7")}
                        >7</button>

                        <button
                            className="btn"
                            style={{
                                margin: " 0 15px"
                            }}
                            onClick={() => ClBtn("8")}
                        >8</button>

                        <button
                            className="btn"
                            onClick={() => ClBtn("9")}
                        >9</button>

                    </div>
                    <button
                        className="btn"
                        style={{
                            margin: "15px 0 0 0",
                            minWidth: "100px"
                        }}
                        onClick={() => ClBtn("0")}
                    >0</button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", margin: "0 0 0 10px" }}>
                    <button
                        className="btn"
                        onClick={() => ClBtn(" + ")}>+</button>
                    <button
                        className="btn"
                        style={{ margin: "15px 0" }}
                        onClick={() => ClBtn(" - ")}>-</button>
                    <button
                        className="btn"
                        onClick={() => ClBtn(" * ")}>*</button>
                    <button
                        className="btn"
                        style={{ margin: "15px 0 0 0 " }}
                        onClick={() => ClBtn(" / ")}>/</button>
                    <button
                        className="btn"
                        style={{ margin: "15px 0 0 0 " }}
                        onClick={() => Calculate(btn)}>=</button>
                </div>
            </div>
        </View>
    );
}
