// import { NavLink } from 'react-router-dom'
// import classes from './Header.module.scss'
import { Container, HeaderContainer, StyledNavLink } from './Header.styled'

export const Header = () => {
    // const getActiveClass = ({ isActive }: { isActive: boolean}): string => {
    //     return isActive ? `${classes.active} ${classes.link}` : classes.link
    // }
    return (
        <HeaderContainer>
            <Container>
                <StyledNavLink to="/">ToDo</StyledNavLink>
                <StyledNavLink to="/list">List</StyledNavLink>
            </Container>
        </HeaderContainer>
    )
}