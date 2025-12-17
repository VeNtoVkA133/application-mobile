import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
interface CardProps {
    id: number,
    colorSquare: string,
    styleImg: string,
    nextg: (value: string) => void;
}


const Square = (props: CardProps) => {
    return (
        <div
            style={{
                display: "block",
                backgroundColor: props.colorSquare,
                width: '40px',
                height: '40px',
                border: '0.1px solid black',
                textAlign: "center",
            }}

        >
            <span>{props.id}</span>
            <button style={{ margin: 0, padding: 0,border:"none",background:"none", justifyContent: "none" }} onClick={() => { 
                props.nextg(props.styleImg) }}>
                <Image id="imgBlack" source={require('../assets/images/pointBlack.png')} alt=""
                    style={{
                        width: '39px', height: '39px',
                        display: props.styleImg == 'black' ? "flex" : "none"
                    }}
                />
                <Image id="imgWhite" source={require('../assets/images/pointWhite.png')} alt=""
                    style={{
                        width: '39px', height: '39px',
                        display: props.styleImg == 'white' ? "flex" : "none"
                    }}
                />
            </button>

        </div>
    )
}




export default Square;