import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from './pallet';
import TextInput from './TextInput';
import style from './scale.module.css';
import Preview from './preview';
import Palette2 from './pallet2';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '/css/common.css';
const GlobalStyles = createGlobalStyle`
    ${reset};
`;

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function App() {
    const [color, setColor] = React.useState(getRandomColor());
    const [text, setText] = React.useState('여기다가,_넣어보자,_명언을,_멋드러지게');
    const [userName, setUserName] = React.useState('이름있음');
    const [textColor, setTextColor] = React.useState('#000000');
    const [url, setUrl] = React.useState('');
    const [imageName, setImageName] = React.useState('sample');
    const href = React.useRef(null);
    // const [href, setHref] = React.useState(React.useRef());

    const handleChange = (color: any) => {
        setColor(color.hex);
    }
    const handleTextChange = (e: any) => {
        setText(e.target.value);
    }
    const handleNameChange = (e: any) => {
        setUserName(e.target.value);
    }
    const handleTextColorChange = (color: any) => {
        setTextColor(color.hex);
    }


    return (
        <>
            ${reset}
            <GlobalStyles />
            <Preview color={color} text={text} userName={userName} href={href} setUrl={setUrl} textColor={textColor} />
            <div>
                <h2>텍스트(줄바꿈 하려면  ,_ 를 입력해주세요)</h2>
                <TextInput onChange={handleTextChange} text={text} />
                <h2>이름</h2>
                <TextInput onChange={handleNameChange} text={userName} />
            </div>
            <div>
                <h2>배경색</h2>
                <Palette color={color} onChange={handleChange} />
                <h2>텍스트색</h2>
                <Palette2 color={textColor} onChange={handleTextColorChange} />
                <h3>이름 색상변경은 미구현 입니다.</h3>
            </div>

            <a href={url} className="downbutton" download={`${imageName}.png`}><button className={style.download_btn}>다운로드 버튼</button></a>

        </>
    );

}

export default App;
