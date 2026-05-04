import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";
import { postNote, getNote } from '../api/controllers/common-controller'

const Notes = () => {
    
    const [inpVal, setInpVal] = useState<number>(1);
    const [description, setDescription] = useState<string>('');
    const [descriptionFromDB, setDescriptionFromDB] = useState<string>('');
    const [idFromDB, setIdFromDB] = useState<string>('');
    const [countFromDB, setCountFromDB] = useState<number>(0);


    const handleChange = (inp: number) => {
        setInpVal(inp)
    }

    const handleGetClick = (inp: number) => {
        getNote()
        .then((response) => {
            console.log(response.data)
            setDescriptionFromDB(response.data[inp-1].description)
            setIdFromDB(response.data[inp-1].id)
            setCountFromDB(response.data.length)
        })
        .catch(() => {console.log("ERROR")})
        //console.log('descFromDB')
        //console.log(descFromDB)
        //setDescriptionFromDB();
    }

    const handlePostClick = () => {
        const data = {
            description: description,
        }
        postNote(data)
        .then(() => {
            console.log("noERROR")
        })
        .catch(() => {console.log("ERROR")})
    }
    return (
        <div style={{ display: "flex", flexDirection: 'row'}}>
            <div>   
                <textarea
                    style={{
                        margin: '0 auto'
                    }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    cols={50}
                    placeholder={`Введите заметку:`} />
                <p>{description}</p>
                <button onClick={handlePostClick}>записать</button>

            </div>
            <div style={{margin: "0 0 0 10px"}}>
                <input type="number" placeholder="укажите номер заметки (по умолчанию 1)" value={inpVal} onChange={(e) => handleChange(+e.target.value)}/>
                <button onClick={() => handleGetClick(inpVal)}>получить</button>
                <p>Количество заметок: {countFromDB}</p>
                <p>id: {idFromDB}</p>
                <p>desc: {descriptionFromDB}</p>
            </div>
        </div>
        
    )
}

export default Notes