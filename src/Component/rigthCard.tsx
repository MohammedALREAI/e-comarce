import React from 'react'
import { Button, Card, Row, Typography } from '../widget/styles'
import { ShowRow } from './ShowRow'



export const RightCard = () => {
    return (
      <Card width={570} height={528} margin='0px 0px 0px 30'>
        <Row padding={22} margin="45px 65px 0px 37">
  <div>
    <Typography color="#242424" fontSize={32} weight="bold" >My Profile</Typography>
   <ShowRow keys="First Name" value="Amy"/>
   <ShowRow keys="Last Name" value="Mayer"/>
   <ShowRow keys="Email" value="amymay@gmail.com"/>
   <ShowRow keys="Birthday" value="12/04/1991"/>
    </div>

        </Row>

      </Card>


    )
}
