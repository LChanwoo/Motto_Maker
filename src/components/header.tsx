
import style from "../css_module/common.module.css"
function Header({ swiper, currentSlide, setCurrentSlide }: any) {
    const onClick = (e: any) => {
        e.preventDefault();
        swiper.slidePrev()
        setCurrentSlide(swiper.activeIndex);
    }
    const onClickReload = (e: any) => {
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div className={style.top}>
            <div className={style.header_top_inner}>
                <div className={style.arrow_wrap}>
                    <button onClick={onClick} style={{ background: "none" }}>
                        <img src={`${process.env.PUBLIC_URL}/img/arrow-left.png`} alt="뒤로가기 버튼" />
                    </button>
                </div>
                <div className={style.logo_wrap}>
                    <img src={`${process.env.PUBLIC_URL}/img/moto_logo_15px.png`} className={style.moto_logo} alt="모토 로고" onClick={onClickReload} />
                </div>
            </div>
        </div>
    );
}
export default Header;