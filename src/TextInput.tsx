const TextInput = ({ onChange }: any) => {
    return (
        <input className="textInput"
            onChange={onChange}
            type="text"
            size={40}
            placeholder="Type text here!" />
    );
}

export default TextInput;