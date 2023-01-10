import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* margin-right: 50px; */
  margin: 50px;
  padding: 40px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CostBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`
const CostTitle = styled.span`
    font-size: 50px;
    font-weight: bold;
`
const Feature = styled.ul`
`
const FeatureItem = styled.li`
    margin: 30px 0;
    font-size: 20px;
`
const Plan = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: none;
    background-color: #A0DDFF;
    color: white;
    border-radius: 20px;
    font-size: 20px;
`
const Button = styled.button`
    border: none;
    background-color: #7189FF;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
`
const Category = ({price,type}) => {
  return (
    <Container>
      <CostBox>
        <CostTitle>{price}</CostTitle>/month
      </CostBox>
      <Plan>{type} Plan</Plan>
      <Feature>
        <FeatureItem>Feature 1</FeatureItem>
        <FeatureItem>Feature 2</FeatureItem>
        <FeatureItem>Feature 3</FeatureItem>
      </Feature>
        <Button>Select</Button>
    </Container>
  )
}

export default Category
