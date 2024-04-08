
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
        Image: [],
        Carousel: true,
        textIncluded: false,
        HeaderIncluded: false,
        text: '',
        Header: '',
        ID: 1,
        Style: "noText",
        Hashtag: "",
        textBackgroundColor: "",
        fontFamily: "",
    },

]


