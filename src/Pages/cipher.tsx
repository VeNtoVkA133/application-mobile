import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react";
import { postNote, getNote, createNote, getListNotes, changeNote } from '../api/controllers/common-controller'
import { dataCipher } from '@/src/types/data.types';

const Cipher = () => {
    
    const [TextCipher, setTextCipher] = useState<string>('');
    const [NoteFromDB, setNoteFromDB] = useState<dataCipher[]>([]);
    const [res, setRes] = useState<string>('');
    const [resTypeTwo, setResTypeTwo] = useState<string>('');


    //создание новой записки
    const handleCreateClick = (name: string) => {
        let result = []
        for(let i = 0; i<name.length;i++){
            let oneSymbol = name[i];
            for(let j = 0; j<symbols.length;j++){
                if(name[i] == symbols[j]){
                    result.push(symbolsBit[j])
                }
            }
        }
        let strResult = '';
        let stringResult = '';
        for(let i = 0;i<result.length;i++){
            strResult = strResult +' '+ result[i];
            if(result[i].toString(2).length != 8){
                for(let j = 0; j<8-result[i].toString(2).length; j++){
                    if(j == 0){
                        stringResult = stringResult + ' 0';
                    }else{
                        stringResult = stringResult + '0';
                    }
                }
                stringResult = stringResult + result[i].toString(2);
            }else{
            stringResult = stringResult + ' ' +  result[i].toString(2)
            }
        }
        setRes(strResult)
        setResTypeTwo(stringResult)
    }
        const symbols = [
          // Английский алфавит - строчные
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
          // Русский алфавит - строчные
          'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л',
          'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш',
          'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
          // Цифры
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          // Символы
          ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',',
          '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']',
          '^', '_', '`', '{', '|', '}', '~'
        ];



        const symbolsBit = [
          
        // Английский алфавит - строчные
            60, 251, 137, 29, 180, 95, 4, 213, 146, 68, 236, 19, 122,
            250, 48, 166, 83, 209, 11, 154, 227, 72, 38, 191, 105, 17,
        // Русский алфавит - строчные
            62, 5, 228,
            145, 36, 182, 96, 249, 70, 12, 163, 119, 46,
            210, 84, 27, 155, 232, 103, 53, 189, 8, 141,
            66, 221, 35, 172, 90, 14, 204, 128, 59, 246,
        // Цифры
            80, 42, 167, 113, 3, 198, 157, 24, 214, 73,
        // Символы
            138, 49,
            231, 100, 18, 179, 94, 252, 56, 144, 30, 208,
            69, 186, 126, 10, 165, 82, 238, 45, 151, 97,
            22, 196, 61, 117, 6, 242, 139, 75, 218, 89
        ];




    //получение списка записок
    const handleGetListNotes = () =>{
        getListNotes()
        .then((response) => {
            console.log(response.data)
            console.log(response.data.length)
            let noteSquare:dataCipher[] = []
            // for(let i = 0; i < response.data.length; i++){
            //     noteSquare.push(<NotesBlock id={response.data[i].id} nameNote={response.data[i].name} description={response.data[i].description} nextg={nextgFunc}/>)
            // }
            setNoteFromDB(response.data)

            //TODO 
            //!сделал создание заметок, нужно сделалать полученисписком. через for получать ид + имя и описание заметки в отдельные поля. Описание заметки должно быть в value textarea 
        })
        .catch(() => {console.log("ERROR")})
        


    }

     return (

        <div style={{ display: "flex", flexDirection: 'row'}}>
            <div>
                <input type="text" value={TextCipher} onChange={(e) => setTextCipher(e.target.value)} placeholder="Что хотите зашифровать?"/>
                <button onClick={(e) => {handleCreateClick(TextCipher)}}>Зашифровать</button>
                {/* <button onClick={handleGetListNotes}>список заметок</button> */}
                {/*< div>{NoteFromDB.map((item,key) => (
                    <NotesBlock key={key} id={item.id} nameNote={item.name} description={item.description} changeInfo={changeNotesInformation}/>
                ))}</div> */}
                <p style={{
                    margin: '10px'
                }}>{res}</p>
                <p style={{
                    margin: '10px'
                }}>{resTypeTwo}</p>
            </div>

            
            {/* <div>   
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
            </div> */}
        </div>
        
    )
}

export default Cipher