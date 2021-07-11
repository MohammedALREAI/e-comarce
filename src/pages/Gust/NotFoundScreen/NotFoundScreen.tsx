import { Link } from 'react-router-dom'
import { Typography, InnerSection } from '../../../Component/widget/styles'

function NotFoundScreen() {
  return (
    <InnerSection>
      <Typography fontSize={40} weight={700}>
        Page Not Found 👀👀
      </Typography>

      <Link to={'/'} style={{ color: '#fcdd06', marginTop: 120 }}>
        Home Page (☞ﾟヮﾟ)☞
      </Link>
    </InnerSection>
  )
}

export default NotFoundScreen
