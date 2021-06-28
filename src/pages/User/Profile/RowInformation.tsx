import { Row, Column } from '../../../Component/widget/styles'
import { LabelValueProfile, LabelProfile } from './profile.styles'

interface Props {

    label:string,
    value:string
}

export const RowInformation = ({ label, value }: Props) => {
    return (
        <Column mt={22}>

        <Row item="center">
        <LabelProfile>{label}</LabelProfile>
        <LabelValueProfile>{value}</LabelValueProfile>
    </Row>
    </Column>

    )
}
