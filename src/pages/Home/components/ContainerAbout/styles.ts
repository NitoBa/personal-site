import styled from 'styled-components';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding: 0 32px;
`;

export const SectionLeft = styled.section`
  z-index: 2;
  margin-top:160px;
  width: 50vw;

  .wellcome{
      color:#3469D0;
      font-size:36px;
  }
  h1{
    font-size:64px;
  }
  p{
    font-size:26px;
    color: rgba(47, 46, 65, 0.58);
    margin-top:27px;
  }
  button{
      margin-top: 36px;
      background-color:#3469D0;
      height:40px;
      width: 150px;
      border-radius:8px;
      transition: background-color 250ms;
      a{
          color:white;
          font-size:14px;
          font-weight:700;
          text-decoration: none;
          
      }

    :hover{
        background-color: #7196FF;
    }
  }
`;

export const SectionRight = styled.section`
    display: flex;
    flex-direction: row;
    align-items:center;
    margin-top:90px;
    margin-left:160px;
    z-index: 2;
    position: absolute;
    right:0;
    padding-right:32px;
    img{
        width:250px;
        margin-right:150px;
    }
   .Icons{
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height:250px;
    .indicator{
        height:5px;
        width:0px;
        background-color:white;
        transition: width 1s;
    }
    .icon:hover{
        .indicator{
            width:50px;
        }
    }
   } 
`;

export const LinkdinIcon = styled(FaLinkedinIn)`
    color:white;
    width:50px;
    height:50px;

`;
export const InstagramIcon = styled(FaInstagram)`
    color:white;
    width:50px;
    height:50px;
`;
export const GithubIcon = styled(FaGithub)`
    color:white;
    width:50px;
    height:50px;
`;
