import React from 'react'
import { Row, Typography } from '../widget/styles'
interface Props {
keys:string,
value:string
}

export const ShowRow = ({ keys, value }: Props) => {
    return (
    <Row justifyContent="space-between" item="center" margin='10px 0px 0px 10'>
        <div>

      <Typography color="#707070" fontSize={24}>{keys}</Typography>
        </div>
        <div>
      <Typography color="#000000" margin="0px 0px 0px 72" fontSize={24}>{value}</Typography>
        </div>
    </Row>

    )
}
