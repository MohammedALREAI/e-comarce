import React from 'react'
import { Column } from '../../../Component/widget/styles'
import { WapprerFeadback, FeedbackText, CommitDate, TextTitle } from './productItem.styles'
import Rating from '@material-ui/lab/Rating'

export const ReviewItem = () => {
    return (
        <Column mt={20}>
        <TextTitle style={{ fontSize: '24px' }}> Jenifer Medhurst</TextTitle>
                <WapprerFeadback>
               <div>
                <Rating
          name="simple-controlled"
          value={4.5}/>

               </div>
               <div>

<CommitDate>28th March 2022</CommitDate>
               </div>
                </WapprerFeadback>
                <FeedbackText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</FeedbackText>
    </Column>
    )
}
