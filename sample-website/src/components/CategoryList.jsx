import Category from "./Category";
import React from 'react'
import styled from "styled-components";


const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CategoryList = () => {
  return (
    <Container>
      <Category price="$10" type="Basic"/>
      <Category price="$20" type="Premium"/>
      <Category price="$30" type="Pro"/>
    </Container>
  )
}

export default CategoryList
