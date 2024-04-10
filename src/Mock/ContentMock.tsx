
export interface ContentMock {
    Image: Array<string>,
    Carousel: boolean,
    textIncluded: boolean,
    HeaderIncluded: boolean,
    text: string,
    Header: string,
    ID: number,
    Style: string,
    Hashtag: string,
    textBackgroundColor: string,
    fontFamily: string,
}

export const ContentArr: ContentMock[] = [
    {
        Image: ["https://i.ytimg.com/vi/wy0HC8Xymbg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCQgJCh_MA8=&amp;rs=AOn4CLB2L6q7WKwA-F4YzHH8jwARaRQn9w", "https://w.forfun.com/fetch/c3/c3e27e37ab6cafb70eda869a2773ec24.jpeg", "https://i.ytimg.com/vi/KRmb5eXay4A/maxresdefault_live.jpg"],
        Carousel: true,
        textIncluded: false,
        HeaderIncluded: false,
        text: '',
        Header: '',
        ID: 0,
        Style: "noText",
        Hashtag: "",
        textBackgroundColor: "",
        fontFamily: "",
    },

]

