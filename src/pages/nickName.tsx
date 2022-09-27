
import nstyle from '../css_module/nickname.module.css';
import cstyle from '../css_module/common.module.css';
const NickName = ({ onNameChange, name }: any) => {
    return (
        <div className={cstyle.contents}>
            <div className={cstyle.inner}>
                <div style={{ height: '140px' }}>
                    <h2 className={cstyle.heading_txt}>누구의 좌우명 인가요?</h2>
                    <p className={cstyle.gray_txt}>나만의 닉네임을 만들어 주세요.</p>
                    <div className="nickname_inputwrap">
                        <input type="text" className={nstyle.input01} onChange={onNameChange} />
                        <span className={nstyle.txt_number}>
                            <span className="">{name.length}</span>
                            <span className=""> / 10</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NickName;