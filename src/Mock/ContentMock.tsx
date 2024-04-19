
export interface ContentMock {
    Image: Array<string>,
    Carousel: boolean,
    textIncluded: boolean,
    Empty: boolean,
    text: string,
    Header: string,
    ID: number,
    Style: string,
    Hashtag: string,
    txtBackColor: string,
    fontFamily: string,
    fontColor: string
}

export const ContentArr: ContentMock[] = [
    {
        Image: ["https://i.ytimg.com/vi/wy0HC8Xymbg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCQgJCh_MA8=&amp;rs=AOn4CLB2L6q7WKwA-F4YzHH8jwARaRQn9w", "https://w.forfun.com/fetch/c3/c3e27e37ab6cafb70eda869a2773ec24.jpeg", "https://i.ytimg.com/vi/KRmb5eXay4A/maxresdefault_live.jpg"],
        Carousel: true,
        textIncluded: true,
        Empty: false,
        text: 'gggggg gggg ggg g g ggggg ggggg gggggg ffffff fffff ffff fggg',
        Header: 'F',
        ID: 0,
        Style: "rightText",
        Hashtag: "fdfdfd",
        txtBackColor: "rgb(0, 0, 0)",
        fontFamily: "",
        fontColor:"rgb(209, 200, 200)"
    },
    {
        Image: [],
        Carousel: false,
        textIncluded: false,
        Empty: true,
        text: '',
        Header: '',
        ID: 1,
        Style: "",
        Hashtag: "",
        txtBackColor: "rgb(0, 0, 0)",
        fontFamily: "",
        fontColor:"rgb(209, 200, 200)"
    },
    {
        Image: [],
        Carousel: false,
        textIncluded: false,
        Empty: true,
        text: '',
        Header: '',
        ID: 2,
        Style: "",
        Hashtag: "",
        txtBackColor: "rgb(0, 0, 0)",
        fontFamily: "",
        fontColor:"rgb(209, 200, 200)"
    },
    {
        Image: [],
        Carousel: false,
        textIncluded: false,
        Empty: true,
        text: '',
        Header: '',
        ID: 3,
        Style: "",
        Hashtag: "",
        txtBackColor: "rgb(0, 0, 0)",
        fontFamily: "",
        fontColor:"rgb(209, 200, 200)"
    },

]


