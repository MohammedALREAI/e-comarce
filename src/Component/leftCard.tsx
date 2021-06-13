import React from 'react'
import { Card, Image, Row, Typography, HorizontalLine } from '../widget/styles'
import { ListProfile } from './ListProfile'



export const LeftCard = () => {
    return (
        <Card width={398} height={528}>
        <Row padding={10} item="center">
          <Image width={137} height={137} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
          <Typography fontSize={32}
          weight="bold"
          margin="0px 0px 0px 19"
          color="#242424">Amy Mayer</Typography>
        </Row>
        <div className="link-content">
          <nav>
            <ul>
              {['My Orders', 'Wishlist', 'Notifcations', 'Settings'].map((text:string) =>
              <ListProfile text={text}/>)}
            </ul>
          </nav>
        <HorizontalLine height={2}/>
        <ListProfile text="logout"/>
        </div>
      </Card>

    )
}
