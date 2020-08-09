import styled from 'styled-components';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
export const Container = styled.div`
    padding: 0 1.6rem;
    background-color: var(--primaryColor);
    height:660px;
    padding-top:4.5rem;
    
    .wellcome {
        
        color:white;
        font-size:2rem;
    }
    .wellcomeDescription {
        color:white;
        font-size:2.8rem;
        line-height:5.5rem;
    }
    img {
        margin:2.5rem 0;
        width:15rem;
    }
    .description {
        margin-top: 3rem;
        color:white;
        font-size:1.8rem;
    }

    .containerImgIcon{
        display:flex;
        justify-content:space-between;
        align-items:center;

        .Icons{
            height:40vh;
            display:flex;
            flex-direction:column;
            justify-content:space-between; 
        }
    }
    .btnCurriculo{
        margin-top: 3.5rem;
        background-color: var(--primaryColorDark);
        height:40px;
        width: 150px;
        border-radius:8px;
        bottom:0px;

      a{
          color:white;
          font-size:14px;
          font-weight:700;
          text-decoration: none;
          
      }
        
    }

    @media(min-width:800px){
        background-color: transparent;

        margin-left:50px;

        .btnCurriculo{
            margin-top: 5.5rem;
            height:60px;
            width: 180px;
            transition: background-color 250ms;
        a{
          
          font-size:18px;
          
          
        }

        
        :hover{
        background-color: var(--primaryColor);
    
    
        }
    }
        

        .wellcome {
    
        margin-top:120px;
        color:var(--primaryColorDark);
        font-size:4rem;
        }
        .wellcomeDescription {
            max-width: 60rem;
            z-index: 2; 
            color:black;
            font-size:6rem;
            line-height:5.5rem;
        }

        .description {
        
        max-width: 50rem;
        margin-top: 10rem;
        color: rgba(47, 46, 65, 0.58);
        font-size:2.8rem;
        }

        .containerImgIcon{
            
            position:absolute;
            right:0;
            top: 18rem;
            margin-right: 1.6rem;

        
        img{
            z-index: 2;
            margin:1.8rem 0;
            margin-right: 10rem;
            width:25rem;
        }
        display:flex;
        justify-content:flex-end;
        align-items:center;

        .Icons{
            
            height:50vh;
            display:flex;
            flex-direction:column;
            justify-content:space-between; 
        }

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
    }

    @media(min-width:1000px){
        .wellcomeDescription{
            max-width: 70rem;
        }
        .description{
            max-width: 60rem;
        }
        .containerImgIcon{
            img{
            
                margin-right: 15rem;
            
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
