import style from "../css_module/common.module.css"
function Header() {
    return (
        <div className={style.top}>
            <div className={style.header_top_inner}>
                <div className={style.arrow_wrap}>
                    <img src={`${process.env.PUBLIC_URL}/img/arrow-left.png`} alt="뒤로가기 버튼" />
                </div>
                <div className={style.logo_wrap}>
                    <img src={`${process.env.PUBLIC_URL}/img/motto-logo.png`} className={style.moto_logo} alt="모토 로고" />
                </div>
            </div>
        </div>
    );
}
export default Header;