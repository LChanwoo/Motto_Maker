import fstyle from '../css_module/final.module.css'
import React from 'react';
import Preview from '../components/preview';
const Final = ({ color, nickName, Text1, Text2, Text3, Text4, href, setUrl, textColor, setColor }: any) => {
    // const [currentBg, setCurrentBg] = React.useState(null);
    const currentBg = React.useRef(null);

    const onClickBg = (e: any) => {
        e.currentTarget.parentNode.childNodes.forEach((el: any, index: any) => {
            if (index >= 2 && (index + 1) % 3 == 0) {
                el.classList.remove(fstyle.all_bg_active);
                el.classList.add(fstyle.all_bg_last);
                if (el == e.currentTarget) {
                    // console.log(el.innerText);
                    setColor(el.innerText);
                    e.target.className += " " + fstyle.all_bg_active
                    return;
                }
            } else {
                el.classList.remove(fstyle.all_bg_active);
                el.classList.add(fstyle.all_bg);
                if (el == e.currentTarget) {
                    // console.log(el.innerText);
                    setColor(el.innerText);
                    e.target.className += " " + fstyle.all_bg_active
                    return;
                }
            }
            // console.log(el.innerText)
            // console.log( index)


        });
    }
    return (
        <>
            <div className={fstyle.final_contents}>
                <div className={fstyle.final_headtxt_wrap}>
                    <div className={fstyle.final_headtxt}>
                        <span>{nickName}</span>님의 멋진 좌우명이네요
                    </div>
                </div>
                <Preview color={color} Text1={Text1} Text2={Text2} Text3={Text3} Text4={Text4} nickName={nickName} href={href} setUrl={setUrl} textColor={textColor} />
                {/* <div className={fstyle.fianl_logo_wrap}>
                            <img src={`${process.env.PUBLIC_URL}/img/moto_logo_15px.png`} className="final_logo" alt="모토 로고" />
                        </div>
                        <div className={fstyle.top_wrap}>
                            <span className={fstyle.fixed_topic}>
                                <span className="">{Text1}</span> 살자
                            </span>
                            <span className={fstyle.fixed_topic}>{Text2}</span>
                            <span className={fstyle.fixed_topic}>{Text3}</span>
                            <span className={fstyle.fixed_topic}>{Text4}</span>
                        </div>
                        <div className={fstyle.fixed_nickname}>- <span>{nickName}</span> -</div> */}

                <div className={fstyle.bg_picker_wrap}>
                    <div className="bg_test">
                        <div className="bg_wrap">
                            <div className={fstyle.all_bg} id="bg1" style={{ backgroundColor: '#F8FAFD' }} onClick={onClickBg}>#F8FAFD</div>
                            <div className={fstyle.all_bg} id="bg2" style={{ backgroundColor: '#fff' }} onClick={onClickBg}>#fff</div>
                            <div className={fstyle.all_bg_last} id="bg3" style={{ backgroundColor: '#9FF5D6' }} onClick={onClickBg}>#9FF5D6</div>
                            <div className={fstyle.all_bg} id="bg4" style={{ backgroundColor: '#FAD' }} onClick={onClickBg}>#FAD</div>
                            <div className={fstyle.all_bg} id="bg5" style={{ backgroundColor: '#FBF8AD' }} onClick={onClickBg}>#FBF8AD</div>
                            <div className={fstyle.all_bg_last} id="bg6" style={{ backgroundColor: '#B7D5F1' }} onClick={onClickBg}>#B7D5F1</div>
                            <div className={fstyle.all_bg} id="bg7" style={{ backgroundColor: '#F8A4A4' }} onClick={onClickBg}>#F8A4A4</div>
                            <div className={fstyle.all_bg} id="bg8" style={{ backgroundColor: '#B4BDCF' }} onClick={onClickBg}>#B4BDCF</div>
                            <div className={fstyle.all_bg_last} id="bg9" style={{ backgroundColor: '#C8B3F6' }} onClick={onClickBg}>#C8B3F6</div>
                            <div className={fstyle.all_bg} id="bg10" style={{ background: 'linear-gradient(180deg, #FFEDBF 0%, #FFCAE3 100%)' }} onClick={onClickBg}>#000001</div>
                            <div className={fstyle.all_bg} id="bg11" style={{ background: 'linear-gradient(180deg, #79cfff7d 0%, #aa7de37d 100%)' }} onClick={onClickBg}>#000002</div>
                            <div className={fstyle.all_bg_last} id="bg12" style={{ background: 'linear-gradient(180deg, #b9e2ffe0 0%, #c1ffdae0 100%)' }} onClick={onClickBg}>#000003</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={fstyle.final_btn_wrap2}></div>
        </>
    );
}

export default Final;