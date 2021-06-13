import styled from 'styled-components'

interface GeneralItem {
    padding?: number | string;
    margin?: number | string;
    width?:number | string;
    height?:number | string;
}
interface IDisplay extends GeneralItem {
    display?: 'flex' | 'grid' | 'block';
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    item?: 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit';

}

interface BackgroundProps extends IDisplay {
    backgroundImage: string;
    backgroundColor: string;
}

export const Background = styled('div')<BackgroundProps>`
    display: ${(props) => props.display};
    width: ${(props) => (props.width ? props.width : '100vw')};
    height: ${(props) => (props.height ? props.height : '100vh')};
    background: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-color: ${(props) => props.backgroundColor};
`

type ContainerProps = IDisplay

export const Container = styled('div')<ContainerProps>`
    display: ${(props) => (props.display ? props.display : props.theme.display.flex)};
    align-items: ${(props) => (props.item ? props.item : props.theme.item.center)};
    align-content: ${(props) => (props.justifyContent ? props.justifyContent : props.theme.JC.center)};
    padding: ${(props) => (props.padding ? props.padding + 'px' : props.theme.borderRadii.sm + 'px')};
    margin: ${(props) => (props.margin ? props.margin + 'px' : '0 auto')};

    @media (min-width: 1024px) {
        max-width: 1024px;
    }
    @media (min-width: 760px) and (max-width: 979px) {
        min-width: 760px;
        max-width: 979px;
        padding: ${(props) => (props.padding ? props.padding + 'px' : '30px')};
        display: ${(props) => (props.display ? props.display : props.theme.display.block)};
        align-items: ${(props) => (props.item ? props.item : props.theme.item.center)};
        text-align: center;
        align-content: ${(props) => (props.justifyContent ? props.justifyContent : props.theme.JC.center)};
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    @media (min-width: 1536px) {
        max-width: 1536px;
    }

    @media (max-width: 767px) { 
        padding: ${(props) => (props.padding ? props.padding + 'px' : '30px')};
        display: ${(props) => (props.display ? props.display : props.theme.display.block)};
        align-items: ${(props) => (props.item ? props.item : props.theme.item.center)};
        text-align: center;
        align-content: ${(props) => (props.justifyContent ? props.justifyContent : props.theme.JC.center)};
    }
`
// `

interface InputFiledProps {
    width: number;
    height: number;
    color?: string;
    backColor?: string;
}

export const InputFiled = styled('input')<InputFiledProps>`
    border: "1px solid #707070";
    border-radius: ${(props) => props.theme.borderRadii.sm + 'px'};
    opacity: 1;
    color: ${(props) => (props.color ? props.color : '#707070')};
    background-color: ${(props) => (props.backColor ? props.backColor : '#fff')};
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
`

interface InputFiledProps extends IDisplay {
    color?: string;
    backColor?: string;

}

export const Button = styled('button')<InputFiledProps>`
    display: ${(props) => (props.display ? props.display : 'flex')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
    align-items: ${(props) => (props.item ? props.item : props.theme.item.center)};
    color: ${(props) => (props.color ? props.color : '#FCDD06')};
    height: ${(props) => props.height ? props.height + 'px' : 'auto'};
    width: ${(props) => props.width ? props.width + 'px' : 'auto'};
    max-height: ${(props) => props.height ? props.height + 'px' : 'auto'};
`

interface ImageInterface {
    width: number;
    height: number;
    fit?: string;
    radius?:number | 'string'
}
export const Image = styled('img')<ImageInterface>`
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    object-fit: ${(props) => (props.fit ? props.fit : 'cover')};
    border-radius: ${(props) => props.radius ? props.radius : '50%'};
`

type MainContainerProps = IDisplay;

export const MainContainer = styled.div<MainContainerProps>`
    max-width: 1920px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    background: #ddd;
    flex-direction: column;
`

interface TypographyProps extends GeneralItem {
    color?: string;
    fontSize?: number;
    weight?:string
}

export const Typography = styled('p')<TypographyProps>`
    margin: ${props => props.margin ? props.margin + 'px' : '0px'};
    padding: ${props => props.padding ? props.padding + 'px' : '0px'};
    color: ${(props) => (props.color ? props.color : props.theme.color['black-200'])};
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : props.theme.font.md + '')};
    font-weight: ${(props) => (props.weight ? props.weight : +'normal')};
font-weight: bold;
`

type CardProps = IDisplay
export const Card = styled('div')<CardProps>`
background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius:${(props) => props.theme.borderRadii.md};
width:${(props) => props.width ? props.width + 'px' : 'auto'};
height:${(props) => props.height ? props.height + 'px' : 'auto'};
margin:${(props) => props.margin ? props.margin + 'px' : '0px'};
opacity: 1;

`

type RowProps = IDisplay
export const Row = styled('div')<RowProps>`
display: flex;
flex-direction: row;
justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'start'};
align-items: ${(props) => props.item ? props.item : 'start'};
padding: ${(props) => props.item ? props.padding + 'px' : '0px'};
margin: ${(props) => props.margin ? props.margin + 'px' : '0px'};
`


type HorizontalLineProps = GeneralItem & {
    width?: number,
    height?:number
}
export const HorizontalLine = styled('hr')<HorizontalLineProps>`
width:${props => props.width ? props.width + 'px' : '100%'};
height:${props => props.height ? props.height + 'px' : '100%'};
color: ${props => props.color ? props.color : '#fff'};


`
