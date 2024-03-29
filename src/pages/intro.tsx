import Header from "../components/header"
import cstyle from "../css_module/common.module.css"
import style from "../css_module/intro.module.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { useEffect } from "react";
const Intro = ({ currentSlide }: any) => {
    return (
        <>
            < div className={cstyle.contents} >
                <div className={style.inner}>
                    <div className={style.slides}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={100}
                            slidesPerView={1}
                            centeredSlides={true}
                            allowTouchMove={false}
                            onSwiper={(swiper) => { swiper.width = window.innerWidth >= 650 ? 600 : window.innerWidth; }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            <div >
                                <SwiperSlide key={0}>
                                    <div className={style.intro_img_wrap}>
                                        <img className={style.intro_img} src="/img/sample1.png" />
                                    </div>
                                    <div className={style.intro_txt_wrap}>
                                        <h2 className={style.intro_heading_txt2}>나만의 좌우명을 만들어 보세요.</h2>
                                        <p className={cstyle.gray_txt}>재미있는 태그를 이용해 문장을 완성할 수 있어요.</p>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div>
                                <SwiperSlide key={1}>
                                    <div className={style.intro_img_wrap} >
                                        <img className={style.intro_img} src="/img/sample2.png"></img>
                                    </div>

                                    <div className={style.intro_txt_wrap}>
                                        <h2 className={style.intro_heading_txt2}>나만의 좌우명을 만들어 보세요.</h2>
                                        <p className={cstyle.gray_txt}>내가 만든 좌우명을 친구들에게 공유할 수 있어요.</p>
                                    </div>
                                    <SwiperController currentSlide={currentSlide} />
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div >
        </>

    )
}

const SwiperController = ({ currentSlide }: any) => {
    const swiper = useSwiper();
    useEffect(() => {
        if (currentSlide === 0) {
            swiper.autoplay.run();
        } else {
            swiper.autoplay.pause();
        }
    }, [currentSlide])
    return (
        <></>
    )
}
export default Intro