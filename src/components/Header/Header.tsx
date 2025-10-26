// import { NavLink } from 'react-router-dom'
// import classes from './Header.module.scss'
import { toogleThemeAction } from '../../feature/themeList'
import { Button, Container, HeaderContainer, StyledNavLink, ToggleButton } from './Header.styled'
import { useDispatch } from 'react-redux'

export const Header = () => {
    // const getActiveClass = ({ isActive }: { isActive: boolean}): string => {
    //     return isActive ? `${classes.active} ${classes.link}` : classes.link
    // }
    const dispatch = useDispatch()
    return (
        <HeaderContainer>
            <Container>
                <StyledNavLink to="/">ToDo</StyledNavLink>
                <StyledNavLink to="/list">List</StyledNavLink>

                <ToggleButton>
                    <Button onClick={() => dispatch(toogleThemeAction())}>toggle</Button>
                </ToggleButton>
            </Container>
        </HeaderContainer>
    )
}