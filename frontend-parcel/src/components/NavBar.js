import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function navBar() {
    const [activeItem, setActiveItem] = useState('')
    const handleItemClick = (e, {name}) => setActiveItem(name)

    const Menu = styled.div`
        display:flex;
        width: clamp(100% 50% 80%);
        font-family: "Roboto";
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.5rem;
    `
    const RightMenu = styled.div`
        padding: 1rem;
        margin: 0 0.3rem;
    `
    const LeftMenu = styled.div`
        padding: 1rem;
        margin: 0 0.3rem;
    `
    const Item = styled(Link)`
        padding: 1rem;
        margin: 0 0.3rem;
        color: thistle;
        border: 1px solid #ccc;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        &:hover{
            background-color: pink;
            color: white;
            border: 1px solid pink;
            transition: all 500ms;
        }
    `
    return (
        <div>
            <Menu>
                <LeftMenu>
                    <Item to="/">
                        Home
                    </Item>
                </LeftMenu>
                <RightMenu>
                    <Item to="/login">
                        login
                    </Item>
                    <Item to="/register">
                        register
                    </Item>
                </RightMenu>
            </Menu>
        </div>
    )
}
