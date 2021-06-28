import { FC } from 'react'
import { Typography } from '../widget/styles'
import { ListItem, CustomLink, Badge } from './NavBar.styles'




interface Props {
    title: string,
    to:string,
    isBadge?:boolean,
    countBadge?:number,
    onClick?:()=>void

}

export const ListNavItem:FC<Props> = ({ title, to, children, isBadge, countBadge, onClick }) => {
    return (
        <ListItem onClick={onClick}>
                    <CustomLink to={to}>
            {isBadge && <Badge>{countBadge}</Badge>}
                    {children}
                <Typography mt={11} color="#FFFFFF" fontSize={13}>{title}</Typography>

</CustomLink>
        </ListItem>
    )
}
