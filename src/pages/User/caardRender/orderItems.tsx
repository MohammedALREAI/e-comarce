/* eslint-disable @typescript-eslint/no-explicit-any */
import { RightItem } from './RightItem'
import { LeftItem } from './LeftItem'
import { Column, InnerSection, Row } from '../../../Component/widget/styles'
import { Navigation } from '../../../Component/Navigation/Navigater'
import { TState } from '../../../redux/Store'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CartActions } from '../../../redux/Cart/CartAction'

export const OrderItems = () => {
     const cart = useSelector((state: TState) => state.cart)

     const dispatch = useDispatch()
     const { addItem, decreesItem } = bindActionCreators(CartActions, dispatch)
     return (
       <Column bg="#FFFFFF">
         <InnerSection>
           <Column mt={38}>
             <Navigation title="Shopping Cart" />
             <Row JC="space-between" item="center" mt={30}>
               <Row width={1226} maxWidth={1226} style={{ flex: '0 0 151%' }}>
                 <Column>
                   {cart.cart.length > 1 &&
                     cart.cart.map((item: any) => (
                       <RightItem
                         imge={'https://proshop-ms.herokuapp.com/' + item.image}

                         title={item.name}
                         countP={1}
                         incres={() => {
                           addItem(item, 1)
                         }}
                         decres={() => {
                           decreesItem(item)
                         }}
                         price={item.price}
                       />
                     ))}
                 </Column>
               </Row>
               <Row width={384} ml={30} pt={20}>
                 <LeftItem />
               </Row>
             </Row>
           </Column>
         </InnerSection>
       </Column>
     )
}
