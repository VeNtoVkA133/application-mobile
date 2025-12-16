import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import Square from "../components/gameCheckers/Square.tsx";
import { flingGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler.js";

const Clicker = () => {
    const [hp, setHp] = useState(60);
    let frame;
    const startGame = () => {
    }
    


    return (
        <div 
        style={{
            padding: '5px',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            <Square id={1} colorSquare="#faeddc" img=""/>
            <Square id={2} colorSquare="#854e05" img='../assets/images/whitePoint.png'/>
            <Square id={3} colorSquare="#faeddc" img=""/>
            <Square id={4} colorSquare="#854e05" img=""/>
            <Square id={5} colorSquare="#faeddc" img=""/>
            <Square id={6} colorSquare="#854e05" img=""/>
            <Square id={7} colorSquare="#faeddc" img=""/>
            <Square id={8} colorSquare="#854e05" img=""/>

            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Square id={9} colorSquare="#faeddc" img=""/>
                <Square id={10} colorSquare="#854e05" img=""/>
                <Square id={11} colorSquare="#faeddc" img=""/>
                <Square id={12} colorSquare="#854e05" img=""/>
                <Square id={13} colorSquare="#faeddc" img=""/>
                <Square id={14} colorSquare="#854e05" img=""/>
                <Square id={15} colorSquare="#faeddc" img=""/>
                <Square id={16} colorSquare="#854e05" img=""/>
            </div>

            <Square id={17} colorSquare="#faeddc" img=""/>
            <Square id={18} colorSquare="#854e05" img=""/>
            <Square id={19} colorSquare="#faeddc" img=""/>
            <Square id={20} colorSquare="#854e05" img=""/>
            <Square id={21} colorSquare="#faeddc" img=""/>
            <Square id={22} colorSquare="#854e05" img=""/>
            <Square id={23} colorSquare="#faeddc" img=""/>
            <Square id={24} colorSquare="#854e05" img=""/>

            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Square id={25} colorSquare="#faeddc" img=""/>
                <Square id={26} colorSquare="#854e05" img=""/>
                <Square id={27} colorSquare="#faeddc" img=""/>
                <Square id={28} colorSquare="#854e05" img=""/>
                <Square id={39} colorSquare="#faeddc" img=""/>
                <Square id={30} colorSquare="#854e05" img=""/>
                <Square id={31} colorSquare="#faeddc" img=""/>
                <Square id={32} colorSquare="#854e05" img=""/>
            </div>

            <Square id={33} colorSquare="#faeddc" img=""/>
            <Square id={34} colorSquare="#854e05" img=""/>
            <Square id={35} colorSquare="#faeddc" img=""/>
            <Square id={36} colorSquare="#854e05" img=""/>
            <Square id={37} colorSquare="#faeddc" img=""/>
            <Square id={38} colorSquare="#854e05" img=""/>
            <Square id={39} colorSquare="#faeddc" img=""/>
            <Square id={40} colorSquare="#854e05" img=""/>

            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Square id={41} colorSquare="#faeddc" img=""/>
                <Square id={42} colorSquare="#854e05" img=""/>
                <Square id={43} colorSquare="#faeddc" img=""/>
                <Square id={44} colorSquare="#854e05" img=""/>
                <Square id={45} colorSquare="#faeddc" img=""/>
                <Square id={46} colorSquare="#854e05" img=""/>
                <Square id={47} colorSquare="#faeddc" img=""/>
                <Square id={48} colorSquare="#854e05" img=""/>
            </div>

            <Square id={49} colorSquare="#faeddc" img=""/>
            <Square id={50} colorSquare="#854e05" img=""/>
            <Square id={51} colorSquare="#faeddc" img=""/>
            <Square id={52} colorSquare="#854e05" img=""/>
            <Square id={53} colorSquare="#faeddc" img=""/>
            <Square id={54} colorSquare="#854e05" img=""/>
            <Square id={55} colorSquare="#faeddc" img=""/>
            <Square id={56} colorSquare="#854e05" img=""/>

            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Square id={57} colorSquare="#faeddc" img=""/>
                <Square id={58} colorSquare="#854e05" img=""/>
                <Square id={59} colorSquare="#faeddc" img=""/>
                <Square id={60} colorSquare="#854e05" img=""/>
                <Square id={61} colorSquare="#faeddc" img=""/>
                <Square id={62} colorSquare="#854e05" img=""/>
                <Square id={63} colorSquare="#faeddc" img=""/>
                <Square id={64} colorSquare="#854e05" img=""/>
            </div>

        </div>
    )
}

export default Clicker