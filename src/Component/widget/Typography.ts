
import styled from 'styled-components'
import { ITypography } from './styles.interface'


export const Typography = styled('p')<ITypography>`
color:${(props) => props.color ? props.color : '#000'};
font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : props.theme.font.md + 'px')};
font-weight:${props => props.weight ? (typeof (props.weight) === 'string' ? props.weight : props.weight) : 'normal'};


//handle padding  for single isues
/* top -right left-botton  */
padding:${props => props.padding ? (typeof (props.padding) === 'string' ? props.padding : props.padding + 'px') : '0px'};
/* padding  x */
padding:${props => props.px ? (typeof (props.px) === 'string' ? '0px' + '  ' + props.px : '0px' + ' ' + props.px + 'px') : '0px'};
padding:${props => props.py ? (typeof (props.py) === 'string' ? props.px + '0px' : props.px + 'px' + ' ' + '0px') : '0px'};

/* padding top left right bootom  */
padding-top:${props => props.pt ? (typeof (props.pt) === 'string' ? props.pt : props.pt + 'px') : '0px'};
padding-bottom:${props => props.pb ? (typeof (props.pb) === 'string' ? props.pb : props.pb + 'px') : '0px'};
padding-left:${props => props.pl ? (typeof (props.pl) === 'string' ? props.pl : props.pl + 'px') : '0px'};
padding-right:${props => props.pr ? (typeof (props.pr) === 'string' ? props.pr : props.pr + 'px') : '0px'};
text-decoration:${props => props.decoration ? props.decoration : 'none'};

//handle margin for single isues

margin:${props => props.margin ? (typeof (props.margin) === 'string' ? props.margin : props.margin + 'px') : '0px'};

/* margin x and  y */
margin:${props => props.mx ? (typeof (props.px) === 'string' ? '0px' + '  ' + props.mx : '0px' + ' ' + props.mx + 'px') : '0px'};
margin:${props => props.my ? (typeof (props.my) === 'string' ? props.mx + '0px' : props.mx + 'px' + ' ' + '0px') : '0px'};


/* marfin top ledt botton rigth */
margin-left:${props => props.ml ? (typeof (props.ml) === 'string' ? props.ml : props.ml + 'px') : '0px'};
margin-bottom:${props => props.mt ? (typeof (props.mt) === 'string' ? props.mt : props.mt + 'px') : '0px'};
margin-right:${props => props.mr ? (typeof (props.mr) === 'string' ? props.mr : props.mr + 'px') : '0px'};
margin-bottom:${props => props.mb ? (typeof (props.mb) === 'string' ? props.mb : props.mb + 'px') : '0px'};


`
