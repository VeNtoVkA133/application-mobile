import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
interface CardProps {
    id: number
    imag: string,
    price: number,
    desc: string,
    nextg: (value: string) => void;
}
const CardCafeMachine = (props: CardProps) => {




    return (
        <div style={{display: 'flex', flexDirection:'column', maxWidth: '200px', alignItems: 'center'}}>
            <img src='{props.imag}' alt="" height='200px' width='200px' />
            <span>ID = {props.id}</span>
            <span id='price' style={{display: "block"}}>{props.price}</span>
            <p id='description'>{props.desc}</p>
        </div>
    )
}

export default CardCafeMachine