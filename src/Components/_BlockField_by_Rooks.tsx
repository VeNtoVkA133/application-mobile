import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import { HoverEffect } from "react-native-gesture-handler";
interface CardProps {
    id: number,
    color: string,
    nextg: (value: number) => void;
}

const BlockField_by_Rooks = (props: CardProps) => {
    return (
        <button
            onClick={() => { props.nextg(props.id)}}
            style={{
                padding: 0,
                margin: 0,
                display: "block",
                backgroundColor: props.color,
                width: '40px',
                height: '40px',
                border: '0.1px solid black',
                textAlign: "center",
            }}>
            {props.id}
        </button >
    )
}


export default BlockField_by_Rooks;