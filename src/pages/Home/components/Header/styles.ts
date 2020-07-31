import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top: 32px;
    align-items:center;
    padding: 0 32px;
    justify-content: space-between;
`;

export const HeaderProfile = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    
    img{
        width:64px;
        height:64px;
        border-radius:50%;
        margin-right: 8px;
    }
    h1{
      color:#3469D0;
      font-size:26px;
    }
`;

export const HeaderActions = styled.div`
    display:flex;
    flex-direction:row;
    z-index:2;
    button{
        background-color:transparent;
        border: none;  
        div{
        
        background-color:white;
        width:0px;
        height:5px;
        margin-left:75px;
        transition: width 1s;
   
    }
    :hover{
        div{
            width:90px;
        }
       
    }
        
    }
        h1{
            color:white;
            font-size:26px;
            margin-left: 72px;
        }
`;


