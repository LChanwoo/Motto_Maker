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

export const Tags1_4 = [
    "test"
]

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

export const Tags1 = () => {
    let tmpTags = Tags1_1.concat(Tags1_2).concat(Tags1_10).concat(Tags1_4);
    while (tmpTags.length !== 10) {
        tmpTags.splice(Math.floor(Math.random() * tmpTags.length), 1);
    }
    return tmpTags;
}