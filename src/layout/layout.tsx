
import { MainContainer } from '../Component/widget/styles'
import { Navbar } from '../Component/NavBar/Navbar'
import { FC } from 'react'



export const Layout:FC = ({ children }) => {
    return (
        <MainContainer>
        <Navbar/>
        {children}
        </MainContainer>
    )
}
