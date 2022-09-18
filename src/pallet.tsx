import { CirclePicker, GithubPicker, HuePicker, SketchPicker } from 'react-color';

function Palette({ color, onChange }: any) {
    return (
        <div className="paletteWrapper">
            <div className="circlePicker">
                <GithubPicker color={color} onChange={onChange} />
            </div>
            {/* <div className="huePicker">
                <HuePicker color={color} onChange={onChange} />
            </div> */}
        </div>
    );



}

export default Palette;