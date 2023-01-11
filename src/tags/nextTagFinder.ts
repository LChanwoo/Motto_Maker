import { Tags1_1, Tags1_2 } from "./Tags1";
import { Tags2_1, Tags2_2, Tags2_3, Tags2_4 } from "./Tags2";
import { Tags3_1, Tags3_2, Tags3_3, Tags3_4 } from "./Tags3";
import { Tags4_1, Tags4_5, Tags4_6 } from "./Tags4";

export const secondTag = (tag: string) => {
    if (Tags1_1.includes(tag)) {
        return Tags2_1;
    } else if (Tags1_2.includes(tag)) {
        const tmpTags = Tags2_1.concat(Tags2_2).concat(Tags2_3);
        // let newTags = [];
        while (tmpTags.length !== 10) {
            tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
        }
        // console.log(newTags);
        return tmpTags;
    }
    return [""];

}
export const thirdTag = (tag: string) => {
    if (Tags2_1.includes(tag)) {
        const tmpTags=Tags3_1;
        while (tmpTags.length > 10) {
            tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
        }
        return tmpTags;
    } else if (Tags2_2.includes(tag)) {
        const tmpTags=Tags3_2;
        while (tmpTags.length > 10) {
            tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
        }
        return tmpTags;
    } else if (Tags2_3.includes(tag)) {
        const tmpTags=Tags3_3;
        while (tmpTags.length > 10) {
            tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
        }
        return tmpTags;
    } else if (Tags2_4.includes(tag)) {
        const tmpTags=Tags3_4;
        while (tmpTags.length > 10) {
            tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
        }
        return tmpTags;
    }

    return [""];

}
export const finalTag = (tag: string) => {
    if (Tags3_1.includes(tag)) {
        return Tags4_1;
    } else if (Tags3_2.includes(tag)) {
        return Tags4_5;
    } else if (Tags3_3.includes(tag)) {
        return Tags4_6;
    } else if (Tags3_4.includes(tag)) {
        return Tags3_4;
    }

    return [""];

}