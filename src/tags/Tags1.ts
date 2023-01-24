export const Tags1_1 = [//재치있는 분위기 //Tags1_2 선택시 Tags2_1, 2_2, 2_3 그룹 중 랜덤으로 10개 선택지 제시
    "흥미롭게 살자",
    "재치있게 살자",
    "힙하게 살자",
]
export const Tags1_2 = [//
    "느긋하게 살자",
    "풍족하게 살자",
    "여유롭게 살자",
    "낭낭하게 살자",
    "넉넉하게 살자",
]

// export const Tags1_4 = [

// ]

export const Tags1_10 = [
    "센스있게",
    "세련되게",
    "앙칼지게",
    "구슬프게",
    "포근하게",
    "편안하게",
    "정숙하게",
    "차분하게",
    "엣지있게",
    "조용하게",
]
export const Tags1_11 = [
    "바람아 불어라",
    "폭풍아 쳐라",
    "눈아 내려라",
    "비야 내려라",
    "벼락아 떨어져라",
    "우박아 떨어져라",
    "운석아 떨어져라",
    "화산아 터져라",
    "불꽃아 솟아라",
    "폭설이여 내려라",
    "눈보라여 쳐라",
    "유성아 쏟아져라",
    "불기둥아 솟아라",
    "폭죽아 터져라",

]
export const Tags1_12 = [
    "혁명적으로",
    "혁신적으로",
    "급진적으로",
]
export const Tags1_13 = [
    "파티는 끝났지만",
    "회의는 끝났지만"
]
export const Tags1_14 = [
    "온 힘을 다해",
]
export const Tags1_15 = [
    "눈물을 참으며"
]

export const Tags1_16 : string[] = [
    "기분이 이상해지도록",
    "기분이 좋아지도록",
    "기분이 나쁘지 않도록",
]

export const Tags1_17: string[] = [
    "끝날때까지 끝나지 않기에"
]

export const Tags1_18 : string[]= [
    "안녕!"
]

export const Tags1_19 : string[]= [
    "사랑했어요"
]

export const Tags1_20: string[] = [
    "행복을 허상이라 말하는",
]

export const Tags1_21: string[] = [
    "커피가 쓰다",
]
export const Tags1_22: string[] = [

]
export const Tags1_23: string[] = [

]
export const Tags1_24: string[] = [

]
export const Tags1_25: string[] = [

]

export const Tags1 = () => {
    let tmpTags = Tags1_1.concat(Tags1_2).concat(Tags1_10).concat(Tags1_11).concat(Tags1_12)
    .concat(Tags1_13).concat(Tags1_14).concat(Tags1_15).concat(Tags1_16).concat(Tags1_17).concat(Tags1_18)
    .concat(Tags1_19).concat(Tags1_20).concat(Tags1_21).concat(Tags1_22).concat(Tags1_23).concat(Tags1_24).concat(Tags1_25);
    while (tmpTags.length >15) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }
    return tmpTags;
}