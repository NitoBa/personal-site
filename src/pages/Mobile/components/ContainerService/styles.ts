import styled from 'styled-components';

export const Container = styled.footer`
  background-color:rgba(113, 150, 255, 0.08);
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:50px;
  #service{
    font-size: 22px;
    margin-top:20px;
  }
  p{
    text-align:center;
    margin-top:16px;
    color:grey;
    font-size:16px;
    font-weight:500;
  }
  #email{
    margin-top:20px;
    color:#7196FF;
    font-weight:500;
    font-size:1.6rem;
  }
    #line{
      margin-top:15px;
      height:1px;
      background-color:#C4C4C4;
      width: 80vw;
  }
  #copyright{
    margin:12px 0;
    font-weight:400;
    font-size:1.6rem;
    color:grey;
      span{
          font-size:1.6rem;
          color:#7196FF;
          margin: 0 6px;
          
      }
    
  }
`;

export const SocialLinks = styled.div`
    margin-top:25px;
    align-items:center;
    display:flex;
    flex-direction:column;
    strong{
        margin-bottom:12px;
        font-size:1.5rem;
    }
    .icon{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:16px;
        span{
            margin-left:8px;
            color:grey;
            font-weight:500;
            font-size:1.6rem;
        }
    }
`;