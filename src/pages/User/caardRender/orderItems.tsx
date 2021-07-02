import { RightItem } from './RightItem'
import { LeftItem } from './LeftItem'
import { Column, InnerSection } from 'Component/widget/styles'
import { Navigation } from 'Component/Navigation/Navigater'


export const OrderItems = () => {
    return (
        <Column bg="#FFFFFF">
            <InnerSection>
                <Column mt={38}>
                    <Navigation title="Shopping Cart" />
                    <Row JC="space-between" item="center" mt={30}>
                        <Row width={1226} maxWidth={1226} style={{ flex: '0 0 151%' }}>
                            <Column>
                                <RightItem />
                                <RightItem />
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
