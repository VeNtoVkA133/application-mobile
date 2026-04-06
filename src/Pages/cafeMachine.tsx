import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import CardCafeMachine from '@/src/Components/_CardsCafeMachine';

const cafeMachine = () => {
    const arrProduct = [
        {
            imag: '@/assets/images/pointBlack.png',
            id: 1,
            price: 10,
            desc: "капучино"
        },
                {
            imag: '@/assets/images/pointBlack.png',
            id: 2,
            price: 15,
            desc: "латте"
        },
        {
            imag: '@/assets/images/pointBlack.png',
            id: 3,
            price: 5,
            desc: "американо"
        }
    ];
    const [id, setId] = React.useState(0)

    const handleClick = (num: string) => {
        let newNumb = Number(String(id) + num);
        setId(newNumb);
    }
    const handleBuy = (id:string) => {
        
    }
    
    return (
        <main style={{display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
            <div style={{display: 'flex', justifyContent: 'row'}}>
                {arrProduct.map((item, key) => (
                    <div>
                        <CardCafeMachine key={key} imag={item.imag} id={item.id} price={item.price} desc={item.desc} nextg={handleBuy}/>
                    </div>
                    
                    
                ))}
            </div>
            <div className="numpad" style={{display:"flex", flexDirection: "column", maxWidth: '165px'}}>
                <span>{id}</span>
                <div style={{display:"flex"}}>
                    <button onClick={() => handleClick('1')} style={styles.btn}>1</button>
                    <button onClick={() => handleClick('2')} style={styles.btn}>2</button>
                    <button onClick={() => handleClick('3')} style={styles.btn}>3</button>
                </div>
                <div style={{display:"flex"}}>
                    <button onClick={() => handleClick('4')} style={styles.btn}>4</button>
                    <button onClick={() => handleClick('5')} style={styles.btn}>5</button>   
                    <button onClick={() => handleClick('6')} style={styles.btn}>6</button>
                </div>
                <div style={{display:"flex"}}>
                    <button onClick={() => handleClick('7')} style={styles.btn}>7</button>
                    <button onClick={() => handleClick('8')} style={styles.btn}>8</button>
                    <button onClick={() => handleClick('9')} style={styles.btn}>9</button>
                </div>
                <button onClick={() => handleClick('0')} style={styles.btnTwo}>0</button>
                <button onClick={() => handleBuy(String(id))} style={styles.btnTwo}>Купить</button>
            </div>
        </main>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        margin: 10,
        fontSize: 20,
        fontWeight: 600,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 50,
    },
    btnTwo: {
        display:"flex",
        justifyContent: 'center',
        padding:10,
        margin: 10,
        fontSize: 20,
        fontWeight: 600,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 50,
    }
})

export default cafeMachine