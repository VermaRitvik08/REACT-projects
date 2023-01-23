import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../utils/StateProvider';

function Header() {

    const [{user}, dispatch] = useStateValue();

  return (
    <HeaderContainer>
        <HeaderLeft>
            
        </HeaderLeft>
        <HeaderRight>
            <Avatar src={user?.images[0]?.url} alt="RV"/>
            <h4>{user?.display_name}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`

`
const HeaderLeft = styled.div`

`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    > h4{
        margin-left: 10px;
    }
`