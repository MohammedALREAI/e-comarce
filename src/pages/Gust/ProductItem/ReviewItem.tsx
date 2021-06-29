import React from 'react'
import { Column } from '../../../Component/widget/styles'
import { WapprerFeadback, FeedbackText, CommitDate, TextTitle } from './productItem.styles'
import Rating from '@material-ui/lab/Rating'
import { formatDate } from 'utils/formatDate'

interface ReviewItemProps {

title:string
text:string
date:string
rate:string

}
export const ReviewItem = ({
 title, text,
date,
rate,
}: ReviewItemProps) => {
     const formatDate = formatDate(date)
    return (
        <Column mt={20}>
            <TextTitle style={{ fontSize: '24px' }}> {title}</TextTitle>
            <WapprerFeadback>
                <div>
                    <Rating name="simple-controlled" value={rate} disabled={true} />
                </div>
                <div>
                    <CommitDate>{formatDate}</CommitDate>
                </div>
            </WapprerFeadback>
            <FeedbackText>{text}</FeedbackText>
        </Column>
    )
}
