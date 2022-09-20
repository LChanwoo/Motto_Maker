const TextInput = ({ onChange, text }: any) => {
    return (
        <input className="textInput"
            onChange={onChange}
            type="text"
            size={40}
            placeholder={text} />
    );
}

export default TextInput;