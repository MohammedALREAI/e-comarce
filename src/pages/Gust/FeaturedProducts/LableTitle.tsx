import { Divider, Column } from 'Component/widget/styles'
import { FeaturedProducts } from './styles'
export const LabelName = () => {
     return (
          <Column item="center" mt={62}>
               <FeaturedProducts>Featured Products</FeaturedProducts>
               <Divider width={200} height={7} color="#FCDD06" mt={22} />
               <Divider width="100%" height={1} />
          </Column>
     )
}
