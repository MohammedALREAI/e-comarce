


 export interface General {

     // margin
     margin?: number | string;
     ml?: number | string;
     my?: number | string;
     mx?: number | string;
     mr?: number | string;
     mt?: number | string;
     mb?: number | string;

// PADDING
    padding?: number | string;
    py?: number | string;
    px?: number | string;

    pl?: number | string;
    pr?: number | string;
    pt?: number | string;
    pb?: number | string;

    // width
    width?:number | string;
    minWidth?:number | string;
    maxWidth?:number | string;


    // height
    height?:number | string;
    minHeight?:number | string;
    maxHeight?:number | string;

    bg?:string,
    radius?:number | string,
    fit?: string;
    color?:string
    fontSize?: number;
    weight?:string | number
}



export type IGeneralDiv = General
export interface ITypography extends General {
    fontSize?: number;
    weight?:string | number,
    decoration?:string

}



export interface IDisplay extends IGeneralDiv {
    display?: 'flex' | 'grid' | 'block'

}

export type IInput = General
