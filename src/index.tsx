import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Intro from './pages/intro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import Header from './components/header';
import cstyle from './css_module/common.module.css';
import style from './css_module/intro.module.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <main className={cstyle.container}>
    <Header />
    < div className={cstyle.contents} >
      <div className={style.inner}>
        <Swiper
          modules={[A11y]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          allowTouchMove={false}
          onSliderMove={(e) => { e.activeIndex = 1; }}
          cssMode={false}
        // onSwiper={(swiper) => { swiper.width = window.innerWidth >= 650 ? 600 : window.innerWidth; }}
        >
          <SwiperSlide>
            <Intro />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div className={style.btn_wrap_inner}>
      <button type="button" className={cstyle.allbtn}>다음</button>
    </div>
  </main>
  // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
