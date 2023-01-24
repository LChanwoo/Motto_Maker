import { Tags1_1, Tags1_10, Tags1_11, Tags1_12, Tags1_13, Tags1_14, Tags1_15, Tags1_16, Tags1_17, Tags1_18, Tags1_19, Tags1_2, Tags1_20, Tags1_21, Tags1_22, Tags1_23, Tags1_24,} from "./Tags1";
import { Tags2_1, Tags2_10, Tags2_11, Tags2_12, Tags2_13, Tags2_14, Tags2_15, Tags2_16, Tags2_17, Tags2_18, Tags2_19, Tags2_2, Tags2_20, Tags2_21, Tags2_22, Tags2_23, Tags2_24, Tags2_25, Tags2_3, Tags2_4 } from "./Tags2";
import { Tags3_1, Tags3_10, Tags3_11, Tags3_12, Tags3_13, Tags3_14, Tags3_15, Tags3_16, Tags3_17, Tags3_18, Tags3_19, Tags3_2, Tags3_20, Tags3_21, Tags3_22, Tags3_23, Tags3_24, Tags3_25, Tags3_3, Tags3_4 } from "./Tags3";
import { Tags4_1, Tags4_5, Tags4_10, Tags4_6, Tags4_11, Tags4_12, Tags4_13, Tags4_14, Tags4_15, Tags4_16, Tags4_17, Tags4_18, Tags4_19, Tags4_20, Tags4_21, Tags4_22, Tags4_23, Tags4_24, Tags4_25 } from "./Tags4";

export const secondTag = (tag: string) => {
    let tmpTags;
    if (Tags1_1.includes(tag)) {
        tmpTags = Tags2_1;
    } else if (Tags1_2.includes(tag)) {
        tmpTags = Tags2_2.concat(Tags2_3);
    // } else if (Tags1_4.includes(tag)) {
        // tmpTags = Tags2_3;
    } else if (Tags1_10.includes(tag)) {
        tmpTags = Tags2_10;
    } else if (Tags1_11.includes(tag)) {
        tmpTags = Tags2_11;
    }else if (Tags1_12.includes(tag)) {
        tmpTags = Tags2_12;
    }else if (Tags1_13.includes(tag)) {
        tmpTags = Tags2_13;
    }else if (Tags1_14.includes(tag)) {
        tmpTags = Tags2_14;
    }else if (Tags1_15.includes(tag)) {
        tmpTags = Tags2_15;
    }else if (Tags1_16.includes(tag)) {
        tmpTags = Tags2_16;
    }else if (Tags1_17.includes(tag)) {
        tmpTags = Tags2_17;
    }else if (Tags1_18.includes(tag)) {
        tmpTags = Tags2_18;
    }else if (Tags1_19.includes(tag)) {
        tmpTags = Tags2_19;
    }else if (Tags1_20.includes(tag)) {
        tmpTags = Tags2_20;
    }else if (Tags1_21.includes(tag)) {
        tmpTags = Tags2_21;
    }else if (Tags1_22.includes(tag)) {
        tmpTags = Tags2_22;
    }else if (Tags1_23.includes(tag)) {
        tmpTags = Tags2_23;
    }else if (Tags1_24.includes(tag)) {
        tmpTags = Tags2_24;
    }else{
        return [""];
    }
    while (tmpTags.length > 15) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }
    return tmpTags;
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
    }else if (Tags2_12.includes(tag)) {
        tmpTags=Tags3_12;
    }else if (Tags2_13.includes(tag)) {
        tmpTags=Tags3_13;
    }else if (Tags2_14.includes(tag)) {
        tmpTags = Tags3_14;
    }else if (Tags2_15.includes(tag)) {
        tmpTags = Tags3_15;
    }else if (Tags2_16.includes(tag)) {
        tmpTags = Tags3_16;
    }else if (Tags2_17.includes(tag)) {
        tmpTags = Tags3_17;
    }else if (Tags2_18.includes(tag)) {
        tmpTags = Tags3_18;
    }else if (Tags2_19.includes(tag)) {
        tmpTags = Tags3_19;
    }else if (Tags2_20.includes(tag)) {
        tmpTags = Tags3_20;
    }else if (Tags2_21.includes(tag)) {
        tmpTags = Tags3_21;
    }else if (Tags2_22.includes(tag)) {
        tmpTags = Tags3_22;
    }else if (Tags2_23.includes(tag)) {
        tmpTags = Tags3_23;
    }else if (Tags2_24.includes(tag)) {
        tmpTags = Tags3_24;
    }else if (Tags2_25.includes(tag)) {
        tmpTags = Tags3_25;
    }
    else{
        return [""];
    }
    while (tmpTags.length > 15) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }
    return tmpTags;

}
export const finalTag = (tag: string) => {
    let tmpTags;
    if (Tags3_1.includes(tag)) {
        tmpTags= Tags4_1;
    } else if (Tags3_2.includes(tag)) {
        tmpTags= Tags4_5;
    } else if (Tags3_3.includes(tag)) {
        tmpTags= Tags4_6;
    } else if (Tags3_4.includes(tag)) {
        tmpTags= Tags3_4;
    } else if (Tags3_10.includes(tag)) {
        tmpTags= Tags4_10;
    } else if(Tags3_11.includes(tag)){
        tmpTags= Tags4_11;
    } else if(Tags3_12.includes(tag)){
        tmpTags= Tags4_12;
    }else if(Tags3_13.includes(tag)){
        tmpTags= Tags4_13;
    }else if(Tags3_14.includes(tag)){
        tmpTags= Tags4_14;
    }else if(Tags3_15.includes(tag)){
        tmpTags= Tags4_15;
    }else if(Tags3_16.includes(tag)){
        tmpTags= Tags4_16;
    }else if(Tags3_17.includes(tag)){
        tmpTags= Tags4_17;
    }else if(Tags3_18.includes(tag)){
        tmpTags= Tags4_18;
    }else if(Tags3_19.includes(tag)){
        tmpTags= Tags4_19;
    }else if(Tags3_20.includes(tag)){
        tmpTags= Tags4_20;
    }else if(Tags3_21.includes(tag)){
        tmpTags= Tags4_21;
    }else if(Tags3_22.includes(tag)){
        tmpTags= Tags4_22;
    }else if(Tags3_23.includes(tag)){
        tmpTags= Tags4_23;
    }else if(Tags3_24.includes(tag)){
        tmpTags= Tags4_24;
    }else if(Tags3_25.includes(tag)){
        tmpTags= Tags4_25;
    }else{
        return [""];
    }

    while (tmpTags.length > 15) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }

    return tmpTags;

}