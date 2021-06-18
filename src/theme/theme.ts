export type ThemeType = typeof theme;

export const CustomTheme = {
    color: {
        navBg: '#242424',
        hero: {
            textBold: '#242424',
            text: '#242424',
            yellow: '#FCDD06',
            grey: '#707070',

        },
        'white-200': '#FFFFFF',
        'white-100': '#F7F8FC',
        'black-200': '#FFFFFF',
        'gray-100': '#DBDBDB',
        'gray-200': '#C7C7C7',
        'gray-300': '#A6A6A6',
        'gray-400': '#707070',
        'gray-500': '#455A64',
        'yellow-100': '#FCDD06',
        'yellow-200': '#FFC727',
        'red-200': '#FC4059',
        'red-100': '#FED6BC',
        green: '#4BB543',
    },
    space: {
        navH: 85,
        logo: {
            width: 180,
            height: 50,
        },
    },

    font: {
        // font sizes
        xm: 13,
        sm: 16,
        md: 22,
        xmd: 24,
        lg: 30,
        xlg: 32,
        xxlg: 60,
    },

    display: {
        flex: 'flex',
        grid: 'grid',
        block: 'block',
    },
    item: {
        stretch: 'stretch',
        center: 'center',
        start: 'start',
        end: 'end',
        baseline: 'baseline',
        initial: 'initial',
        inherit: 'inherit',
    },

    //js for justifyContent
    JC: {
        start: 'start',
        center: 'center',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly',
    },
    TextAlign: {
        left: 'left',
        center: 'center',
        right: 'right',
        justify: 'justify',
    },
    TextDecoration: {
        underline: 'underline',
        through: 'line-through',
        none: 'none',
    },
    borderRadii: {
        one: '1px',
        xm: '6px',
        sm: '10px',
        md: '16px',
        lg: '20px',
    'full-rounded': '50%',
    },
    TextTransform: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
    },
}

const theme = CustomTheme
export default theme
