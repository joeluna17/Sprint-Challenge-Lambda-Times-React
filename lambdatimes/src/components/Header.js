import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
`;
const DateWrapper = styled.span`
margin-left: 25px;
flex: 1;
`;
const TempWrapper = styled.div`
text-align: right;
margin-right: 25px;
flex: 1;
`;

const HeaderTitle = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`;


function Header (){
  return (
    <HeaderWrapper>
      <DateWrapper>SMARCH 32, 2018</DateWrapper>
      <HeaderTitle>Lambda Times</HeaderTitle>
      <TempWrapper>98°</TempWrapper>
    </HeaderWrapper>
  )
}

export default Header