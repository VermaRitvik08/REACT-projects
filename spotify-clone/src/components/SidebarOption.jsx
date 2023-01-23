import React from 'react'
import styled from 'styled-components'

function SidebarOption({title, Icon}) {
  return (
    <SidebarOptionContainer>
        {Icon && <Icon />} 
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer;

    &:hover {
        color: white;
    }

    > p {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px; 
    }

`
