import React from 'react'
import styled from 'styled-components'
import { Typography } from '../widget/styles'


interface Props {
text:string,
link?:string
}

const ListItem = styled('li')`
 margin: 33px 0px;
`
export const ListProfile = ({ text }: Props) => {
    return (
        <ListItem>
                <Typography color="#242424">
                {text}
                </Typography>
              </ListItem>
    )
}
