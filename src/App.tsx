import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from './pallet';
import TextInput from './TextInput';
import style from './scale.module.css';
import Preview from './preview';
import Palette2 from './pallet2';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function App() {
  const [color, setColor] = React.useState(getRandomColor());
  const [text, setText] = React.useState('여기다가,넣어보자,명언을,멋드러지게');
  const [textColor, setTextColor] = React.useState('#000000');
  const [url, setUrl] = React.useState('');
  const href = React.useRef(null);
  // const [href, setHref] = React.useState(React.useRef());

  const handleChange = (color: any) => {
    setColor(color.hex);
  }
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  }
  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  }

  return (
    <>
      <Preview color={color} text={text} userName={"無名의 NoName"} href={href} setUrl={setUrl} textColor={textColor} />
      <div>
        <TextInput onChange={handleTextChange} />
      </div>
      <div>
        <Palette color={color} onChange={handleChange} />
        <Palette2 color={textColor} onChange={handleTextColorChange} />
      </div>
      <a href={url} className="downbutton" download="sample.png">Download</a>
    </>
  );

}

export default App;
