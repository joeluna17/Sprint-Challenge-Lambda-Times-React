import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const ContainerWrapper = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`;

const ContainerLeft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const ContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

const ContaierRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const ContainerLeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const ContaierCenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
`;

const ContianerRightSpan = styled.span`
cursor: pointer;
`;


function TopBar () {
  return (
    //<div className="top-bar">
    <TopWrapper>
      <ContainerWrapper>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContaierCenterSpan>GENERAL</ContaierCenterSpan><ContaierCenterSpan>BROWNBAG</ContaierCenterSpan><ContaierCenterSpan>RANDOM</ContaierCenterSpan><ContaierCenterSpan>MUSIC</ContaierCenterSpan><ContaierCenterSpan>ANNOUNCEMENTS</ContaierCenterSpan>
        </ContainerCenter>
        <ContaierRight>
          <ContianerRightSpan>LOG IN</ContianerRightSpan>
        </ContaierRight>
      </ContainerWrapper>
      </TopWrapper>
  
  )
}

export default TopBar;