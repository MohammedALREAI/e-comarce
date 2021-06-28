import { Column, Row } from '../../../Component/widget/styles'
import { TextTitle, CounterButton, Input, TextColor, WrapperTextDescription, SpanColor, TextDescription, RoundColor, WrapperRoundRow, AddToCart, SelectedButton, AddToBookmark } from './productItem.styles'
import BookmarkIcon from '@material-ui/icons/Bookmark'

export const RightSide = () => {
    return (
        <Column>
        <Row JC="space-between">
    <TextTitle>Apple Airpods Wireless Bluetooth Headset</TextTitle>
    <TextTitle>$499.99</TextTitle>
        </Row>
        <Row mt={30} mb={41}>
            <CounterButton>-</CounterButton>
            <Input>10</Input>
            <CounterButton>+</CounterButton>
        </Row>
        <Row mt={30} mb={41}>
            <Column> mt={10}
           <TextColor>Color :  <SpanColor> Silver</SpanColor> </TextColor>
                <WrapperRoundRow>
                    <RoundColor bg="#FED6BC" isActive={true}/>
                    <RoundColor bg="#EDEAE3"/>
                    <RoundColor bg="#6B7B73"/>
                </WrapperRoundRow>
                <TextColor>Size : <SpanColor> 256GB</SpanColor></TextColor>
                    <Row mt={20}>
                        <Row>
                            <SelectedButton isActive={true}>64GB</SelectedButton>
                            <SelectedButton>225GB</SelectedButton>
                            <SelectedButton>512GB</SelectedButton>
                        </Row>

                        <Row>
                            <AddToBookmark aria-label="BookmarkIconS">
                                <BookmarkIcon aria-label="BookmarkIcon"/>
                                     </AddToBookmark>
                                     <AddToCart>Add to cart</AddToCart>
      </Row>
                    </Row>
<WrapperTextDescription><TextDescription>
Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur non sunt et neque. Aut dolorem repellat quo architecto sint minima doloremque. At quae laborum incidunt vel voluptas dolor similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur sint porro omnis et facere. Voluptatem vitae quo. Similique atque cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur necessitatibus veritatis voluptatem qui velit repellat numquam tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est expedita aspernatur non repellendus nihil perferendis. Et deserunt doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore assumenda. Aut doloribus unde repellat pariatur consequatur. Blanditiis voluptas aut tempora facilis fugi.
    </TextDescription></WrapperTextDescription>

            </Column>
        </Row>
        </Column>
    )
}
