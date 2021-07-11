import {
  Typography,
  Column,
  Image,
  Divider,
  InnerSection,
} from '../../../Component/widget/styles'
import CARD from '../../../Assets/Images/card.png'
import { RowWithRadius } from '../../Gust/TopRate/style'
import { CardItem } from '../../Gust/FeaturedProducts/CardItem'
import { Navigation } from '../../../Component/Navigation/Navigater'
import { useSelector, useDispatch } from 'react-redux'
import { TState } from '../../../redux/Store'
interface Props {
  me?: string;
}

export const ShoppingCart = (props: Props) => {
  const state = useSelector((state: TState) => state.cart)
  const dispatch = useDispatch()
  return (
    <Column bg="#FFFFFF" height={948}>
      <InnerSection>
        <Navigation title="Shopping Cart" />
        <Column mt={20} JC="center" item="center">
          <Typography weight="bold" color="#242424" fontSize={32} mx={2}>
            Your shopping cart is empty
          </Typography>
          <Image src={CARD} alt="dds" mt={30} width={458} height={371} mb={80} />

          <Column item="start" mt={62}>
            <Typography fontSize={32} color="#242424" weight="bold">
              Recently viewed
            </Typography>

            <Divider width={200} height={7} color="#FCDD06" mt={22} />
            <Divider width="100%" height={1} />
          </Column>

          <RowWithRadius>
            {/* {Array(3)
                            .fill(0)
                            .map((x, i) => (
                                <CardItem
                                    key={i}
                                    _id={'' + i}
                                    imag={imges}
                                    title="some text for you"
                                    rate={5}
                                    discount={10}
                                    price={10}
                                />
                            ))} */}
          </RowWithRadius>
        </Column>
      </InnerSection>
    </Column>
  )
}
