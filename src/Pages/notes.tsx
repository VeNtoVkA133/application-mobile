import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useEffect, useState } from "react";
import { postNote, getNote, createNote, getListNotes, changeNote } from '../api/controllers/common-controller'
import NotesBlock from '@/src/Components/_NotesBlock';
import { dataNote } from '@/src/types/data.types';

const Notes = () => {
    
    // const [inpVal, setInpVal] = useState<number>(1);
    // const [description, setDescription] = useState<string>('');
    // const [descriptionFromDB, setDescriptionFromDB] = useState<string>('');
    // const [idFromDB, setIdFromDB] = useState<string>('');
    // const [countFromDB, setCountFromDB] = useState<number>(0);

    const [nameNote, setNameNote] = useState<string>('');
    const [NoteFromDB, setNoteFromDB] = useState<dataNote[]>([]);


    // const handleChange = (inp: number) => {
    //     setInpVal(inp)
    // }

    // const handleGetClick = (inp: number) => {
    //     getNote()
    //     .then((response) => {
    //         console.log(response.data)
    //         setDescriptionFromDB(response.data[inp-1].description)
    //         setIdFromDB(response.data[inp-1].id)
    //         setCountFromDB(response.data.length)
    //     })
    //     .catch(() => {console.log("ERROR")})
    //     //console.log('descFromDB')
    //     //console.log(descFromDB)
    //     //setDescriptionFromDB();
    // }

    //     const handlePostClick = () => {
    //     const data = {
    //         description: description,
    //     }
    //     postNote(data)
    //     .then(() => {
    //         console.log("noERROR")
    //     })
    //     .catch(() => {console.log("ERROR")})
    // }


    //создание новой записки
    const handleCreateClick = (name: string) => {
        const data = {
            name: name,
        }
        createNote(data)
        .then(() => {
            console.log("note '" + nameNote + "' created")
            handleGetListNotes()
        })
        .catch(() => {console.log("ERROR")})
        //console.log('descFromDB')
        //console.log(descFromDB)
        //setDescriptionFromDB();
    }





    //получение списка записок
    const handleGetListNotes = () =>{
        getListNotes()
        .then((response) => {
            console.log(response.data)
            console.log(response.data.length)
            let noteSquare:dataNote[] = []
            // for(let i = 0; i < response.data.length; i++){
            //     noteSquare.push(<NotesBlock id={response.data[i].id} nameNote={response.data[i].name} description={response.data[i].description} nextg={nextgFunc}/>)
            // }
            setNoteFromDB(response.data)

            //TODO 
            //!сделал создание заметок, нужно сделалать полученисписком. через for получать ид + имя и описание заметки в отдельные поля. Описание заметки должно быть в value textarea 
        })
        .catch(() => {console.log("ERROR")})
        


    }



    const changeNotesInformation = (id:number, desc:string) =>{
        const data = {
            description: desc,
        }
        changeNote(id, data)
        .then(() => {
            console.log("note '" + nameNote + "' changed")
        })
        .catch(() => {console.log("ERROR")})
        //console.log('descFromDB')
        //console.log(descFromDB)
        //setDescriptionFromDB();
    }



        const nextgFunc = (id:number, desc: string) => {
        console.log(id)
        console.log(desc)
        const newNoteFromDB = NoteFromDB.map(item => console.log(item));
        console.log("newNoteFromDB")
        console.log(newNoteFromDB)
    }

    useEffect(() => {
        handleGetListNotes()
    }, [])
    return (

        <div style={{ display: "flex", flexDirection: 'row'}}>
            <div>
                <input type="text" value={nameNote} onChange={(e) => setNameNote(e.target.value)} placeholder="название новой заметки"/>
                <button onClick={(e) => {handleCreateClick(nameNote)}}>создать заметку</button>
                {/* <button onClick={handleGetListNotes}>список заметок</button> */}
                <div>{NoteFromDB.map((item,key) => (
                    <NotesBlock key={key} id={item.id} nameNote={item.name} description={item.description} changeInfo={changeNotesInformation}/>
                ))}</div>
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

export default Notes