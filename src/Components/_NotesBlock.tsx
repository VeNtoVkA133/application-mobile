import React, { useState, useEffect } from "react";



interface NoteBlockProps {
    id: number,
    nameNote: string,
    description: string,
    changeInfo: (id: number, desc: string) => void;
}

const NotesBlock = (props: NoteBlockProps) => {
    const [description, setDescription] = useState<string>(props.description);

    const changeCard = (txt: string) => {
        setDescription(txt);
        props.changeInfo(props.id, description);
    }
    const handleClick = () => {

    }
    return (
        <div>
            <span>{props.id} {props.nameNote}</span>
            <textarea
                style={{
                    margin: '0 auto'
                }}
                value={description}
                onChange={(e) => changeCard(e.target.value)}
                rows={10}
                cols={50}
                placeholder={`Введите заметку:`}
            />
            <button onClick={handleClick}>перезаписать заметку</button>
        </div>
    )
}




export default NotesBlock;