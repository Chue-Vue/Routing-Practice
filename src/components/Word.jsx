const Word = props => {
    return(
        isNaN(props.word) ?
        <div>
            <h1>The word is: {props.word}</h1>
        </div>:
        <div>
            <h1>The number is: {props.word}</h1>
        </div>
    )

}

export default Word;