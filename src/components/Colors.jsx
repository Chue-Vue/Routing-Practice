const Colors = props => {
    return(
        <div style={{backgroundColor: props.backgroundColor}}>
            <h1 style={{color: props.textColor}}>The word is: {props.word}</h1>
        </div>
    )
}

export default Colors;