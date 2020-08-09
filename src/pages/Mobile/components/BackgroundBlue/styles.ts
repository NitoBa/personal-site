import styled from 'styled-components';

export const Container = styled.div`
  
  @media(min-width:800px){
    position: absolute;
    background-color: var(--primaryColor);
    height:683px;
    width: 60vw;
    top:0;
    right:0;
    z-index: -1;
    border-radius: 0px 0px 0px 680px;
  }
`;
