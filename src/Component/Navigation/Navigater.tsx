import { useHistory } from 'react-router'
import { BackNavigation } from './Navigation.style'

interface PropsNavigation {
    title: string;
}

export const Navigation = ({ title }: PropsNavigation) => {
    const history = useHistory()
    return (
        <BackNavigation>
            <span onClick={() => history.goBack()}> Back</span> / {title}
        </BackNavigation>
    )
}
