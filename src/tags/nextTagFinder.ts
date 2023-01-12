import { Tags1_1, Tags1_10, Tags1_11, Tags1_2 } from "./Tags1";
import { Tags2_1, Tags2_10, Tags2_11, Tags2_2, Tags2_3, Tags2_4 } from "./Tags2";
import { Tags3_1, Tags3_10, Tags3_11, Tags3_2, Tags3_3, Tags3_4 } from "./Tags3";
import { Tags4_1, Tags4_5, Tags4_10, Tags4_6, Tags4_11 } from "./Tags4";

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
    } else if (Tags1_10.includes(tag)) {
        return Tags2_10;
    }
    else if (Tags1_11.includes(tag)) {
        return Tags2_11;
    }
    return [""];
}
export const thirdTag = (tag: string) => {
    let tmpTags;
    if (Tags2_1.includes(tag)) {
        tmpTags=Tags3_1;
    } else if (Tags2_2.includes(tag)) {
        tmpTags=Tags3_2;
    } else if (Tags2_3.includes(tag)) {
        tmpTags=Tags3_3;
    } else if (Tags2_4.includes(tag)) {
        tmpTags=Tags3_4;
    }else if (Tags2_10.includes(tag)) {
        tmpTags=Tags3_10;
    }else if (Tags2_11.includes(tag)) {
        tmpTags=Tags3_11;
    }else{
        return [""];
    }
    while (tmpTags.length > 10) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }
    return tmpTags;

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
    } else if (Tags3_10.includes(tag)) {
        return Tags4_10;
    } else if(Tags3_11.includes(tag)){
        return Tags4_11;
    }

    return [""];

}