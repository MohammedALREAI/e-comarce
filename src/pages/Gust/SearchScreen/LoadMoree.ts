import styled from 'styled-components'
import { Row } from '../../../Component/widget/styles'
export const LoadMore = styled(Row)<{isLoading?:boolean}>`
  background: ${(props) => (props.isLoading ? '#ddd' : '#fcdd06')};
  border-radius: 21px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 200px;
`
