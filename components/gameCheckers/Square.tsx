interface CardProps {
    id: number,
    colorSquare: string,
    img: string,
}


const Square = (props : CardProps) => {
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
            
            <img src={props.img} alt="" width= '38px' height= '38px'/>
        </div>
    )
}

export default Square;