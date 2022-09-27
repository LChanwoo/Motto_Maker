import React, { useEffect } from 'react';
import './App.css';
// import style from './scale.module.css';
// import '/css/common.css';
import Header from './components/header';
import cstyle from './css_module/common.module.css';
import istyle from './css_module/intro.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Intro from './pages/intro';
import { A11y } from 'swiper';
import Choice from './pages/choice';
import NickName from './pages/nickName';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};


function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [nickName, setNickName] = React.useState('');
  const [Text1, setText1] = React.useState('...');
  const [Text2, setText2] = React.useState('...');
  const [Text3, setText3] = React.useState('...');
  const [Text4, setText4] = React.useState('...');
  const [color, setColor] = React.useState(getRandomColor());
  const [text, setText] = React.useState('여기다가,_넣어보자,_명언을,_멋드러지게');
  const [textColor, setTextColor] = React.useState('#000000');
  const [url, setUrl] = React.useState('');
  const [imageName, setImageName] = React.useState('sample');
  const [nextBtn, setNextBtn] = React.useState(null);
  const href = React.useRef(null);
  const swiperMain = React.useRef(null);
  // const [href, setHref] = React.useState(React.useRef());

  const handleChange = (color: any) => {
    setColor(color.hex);
  }
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  }

  const handleNameChange = (e: any) => {
    if (e.target.value.length >= 10) {
      //10글자 이상 입력시 10글자만 입력되도록
      e.target.value = e.target.value.substring(0, 10)
      return setNickName(e.target.value.substring(0, 10));
    }
    setNickName(e.target.value);
  }
  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  }


  return (
    <>
      <main className={cstyle.container}>
        <Header swiper={nextBtn} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        < div className={cstyle.contents} >
          <div className={cstyle.inner}>
            <Swiper
              modules={[A11y]}
              spaceBetween={1}
              slidesPerView={1}
              centeredSlides={true}
              allowTouchMove={false}
              onSliderMove={(e) => { e.activeIndex = 1; }}
              cssMode={false}
              onSelect={(e) => { console.log(e) }}
            // onSwiper={(swiper) => { swiper.width = window.innerWidth >= 650 ? 600 : window.innerWidth; }}
            >
              <SwiperSlide key={0}>
                <Intro currentSlide={currentSlide} />
                {/* <div style={{ height: window.innerHeight - 64 - 550 }}></div> */}
                <SwiperBtnGetter setNextBtn={setNextBtn} />
              </SwiperSlide>
              <SwiperSlide key={1}>
                <NickName onNameChange={handleNameChange} name={nickName} />
              </SwiperSlide >
              <SwiperSlide key={2}>
                <Choice
                  Text1={Text1}
                  Text2={Text2}
                  Text3={Text3}
                  Text4={Text4}
                  setText1={setText1}
                  setText2={setText2}
                  setText3={setText3}
                  setText4={setText4}
                />
              </SwiperSlide>
              <SwiperSlide key={3}>
                <div> </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <SlideNextButton
          swiper={nextBtn}
          nickname={nickName}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          Text1={Text1}
          Text2={Text2}
          Text3={Text3}
          Text4={Text4}
        />
      </main>
    </>
  );

}

function SlideNextButton({ swiper, setCurrentSlide, nickname, currentSlide, Text1, Text2, Text3, Text4 }: any) {
  // console.log(currentSlide);
  // console.log(swiper)

  const [isDisabled, setIsDisabled] = React.useState(false);
  useEffect(() => {
    if (currentSlide === 1 && nickname.length <= 0) {
      return setIsDisabled(true);
    } else if (currentSlide === 2 && (Text1 === '...' || Text2 === '...' || Text3 === '...' || Text4 === '...')) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentSlide, nickname, Text1, Text2, Text3, Text4]);
  const onClick = () => {
    setCurrentSlide(swiper.activeIndex + 1);
    swiper.slideNext();
  }

  return (
    <div className={cstyle.btn_wrap_inner}>
      <button type="button" className={cstyle.allbtn} onClick={onClick} disabled={isDisabled}>다음</button>
    </div>
  );
}

function SwiperBtnGetter({ setNextBtn }: any) {

  const swiper = useSwiper();
  setNextBtn(swiper);
  return (<></>)
}
export default App;
