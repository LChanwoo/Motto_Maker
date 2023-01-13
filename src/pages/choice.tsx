import cstyle from '../css_module/common.module.css';
import chstyle from '../css_module/choice.module.css';
import React, { useEffect } from 'react';
import { Tags1 } from '../tags/Tags1';
import { Tags2_1 } from '../tags/Tags2';
import { Tags3_1 } from '../tags/Tags3';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tags4_1 } from '../tags/Tags4';
import { finalTag, secondTag, thirdTag } from '../tags/nextTagFinder';
const Choice = ({ Text1, Text2, Text3, Text4, setText1, setText2, setText3, setText4 }: any) => {
    const [Tags, setTags] = React.useState(Tags1);
    const textSelect = React.useRef(null);
    const textSelect2 = React.useRef(null);
    const textSelect3 = React.useRef(null);
    const textSelect4 = React.useRef(null);
    const [nowSelected, setNowSelected] = React.useState(textSelect);
    // const onSelect = (e: any) => {
    //     if (e.currentTarget === textSelect.current) {
    //         setText2('...');
    //         setText3('...');
    //         setText4('...');
    //         setNowSelected(textSelect);
    //         setTags(Tags1);
    //     } else if (e.currentTarget === textSelect2.current) {
    //         // console.log('2');
    //         setText3('...');
    //         setText4('...');
    //         setNowSelected(textSelect2);
    //         setTags(Tags2_1);
    //     } else if (e.currentTarget === textSelect3.current) {
    //         // console.log('3');
    //         setText4('...');
    //         setNowSelected(textSelect3);
    //         setTags(Tags3_1);
    //     } else if (e.currentTarget === textSelect4.current) {
    //         // console.log('4');
    //         setNowSelected(textSelect4);
    //         setTags(Tags4_1);
    //     }

    //     e.currentTarget.parentNode.childNodes.forEach((el: any, index: any) => {
    //         el.classList.remove(chstyle.current_topicbox);

    //         el.classList.add(chstyle.topicbox);
    //         // console.log(el.innerText)
    //         // console.log( index)
    //         if (el == e.currentTarget) {
    //             // console.log('this')
    //         }


    //     });
    //     e.target.className = chstyle.current_topicbox
    // }
    const onTagClick = (e: any) => {
        // console.log(e.currentTarget.parentNode);
        if (nowSelected.current === textSelect.current) {
            setText1(e.target.innerText);
            setTags(secondTag(e.target.innerText));
            setNowSelected(textSelect2);
        } else if (nowSelected.current === textSelect2.current) {
            setText2(e.target.innerText);
            setTags(thirdTag(e.target.innerText));
            setNowSelected(textSelect3);
        } else if (nowSelected.current === textSelect3.current) {
            setText3(e.target.innerText);
            setTags(finalTag(e.target.innerText));
            setNowSelected(textSelect4);
        } else if (nowSelected.current === textSelect4.current) {
            setText4(e.target.innerText);
        }
    }
    const retry = () => {
        const t1 = textSelect.current as any
        const t2 = textSelect2.current as any
        const t3 = textSelect3.current as any
        const t4 = textSelect4.current as any
        t1.className = '';
        t2.className = '';
        t3.className = '';
        t4.className = '';
        t1.className += chstyle.current_topicbox;
        t2.className += chstyle.topicbox;
        t3.className += chstyle.topicbox;
        t4.className += chstyle.topicbox;
        setText1('...');
        setText2('...');
        setText3('...');
        setText4('...');
        setNowSelected(textSelect);
        setTags(Tags1);
    }
    const randomchoice = (e: any) => {
        const random =Tags[Math.floor(Math.random() * Tags.length)]
        if (nowSelected.current === textSelect.current) {
            setText1(random);
            setTags(secondTag(random));
            setNowSelected(textSelect2);
        } else if (nowSelected.current === textSelect2.current) {
            setText2(random);
            setTags(thirdTag(random));
            setNowSelected(textSelect3);
        } else if (nowSelected.current === textSelect3.current) {
            setText3(random);
            setTags(finalTag(random));
            setNowSelected(textSelect4);
        } else if (nowSelected.current === textSelect4.current) {
            setText4(random);
        }
    }
    useEffect(() => {
        // console.log('choice');
        const t1 = textSelect.current as any
        const t2 = textSelect2.current as any
        const t3 = textSelect3.current as any
        const t4 = textSelect4.current as any
        if (Text1 !== '...') {
            t1.className = '';
            t1.className += chstyle.topicbox;
            t1.className += ' ' + chstyle.done;
            t2.className = '';
            t2.className += chstyle.current_topicbox;
            // console.log(t1.className)
        }
        if (Text2 !== '...') {
            t2.className = '';
            t2.className += chstyle.topicbox;
            t2.className += ' ' + chstyle.done;
            t3.className = '';
            t3.className += chstyle.current_topicbox;
            // console.log(t2.className)
        }
        if (Text3 !== '...') {
            t3.className = '';
            t3.className += chstyle.topicbox;
            t3.className += ' ' + chstyle.done;
            t4.className = '';
            t4.className += chstyle.current_topicbox;
            // console.log(t3.className)
        }
        if (Text4 !== '...') {
            t4.className = '';
            t4.className += chstyle.topicbox;
            t4.className += ' ' + chstyle.done;
            // console.log(t4.className)
        }

    }, [Tags, Text1, Text2, Text3, Text4])

    return (
        <>
            <div className={chstyle.choice_inner_second}>
                <div className={chstyle.topic_wrap}>
                    <div className={chstyle.current_topicbox} ref={textSelect} >
                        {Text1}
                    </div>
                    <div className={chstyle.topicbox} ref={textSelect2} >
                        {Text2}
                    </div>
                    <div className={chstyle.topicbox} ref={textSelect3}>
                        {Text3}
                    </div>
                    <div className={chstyle.topicbox} ref={textSelect4}>
                        {Text4}
                    </div>
                </div>
                <div className={chstyle.reset_wrap}>
                    <span className={cstyle.gray_txt} onClick={retry}>다시하기</span>
                </div>
            </div>
            <div className={chstyle.keyword_wrap}>
                <div className={cstyle.inner}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        draggable={true}
                    >
                        <SwiperSlide>
                            <div className={chstyle.random_keyword} onClick={randomchoice}>
                                랜덤
                            </div>
                            {
                                Tags.map((el: any, index: any) => {
                                    return (

                                        <div className={chstyle.keyword} key={index} onClick={onTagClick}>
                                            {el}
                                        </div>

                                    )
                                })
                            }
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}


export default Choice;