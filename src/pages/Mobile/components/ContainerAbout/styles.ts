import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 2.5rem;
    h2{
        text-align: center;
        font-size:3rem;
        
    }

    .desktop{
        font-size:0;
    }

  .photos{
    #bolls{
        width:0;
    }
    #profilePhoto{
        padding:1.6rem;
        width:300px;
    }
  }

  #circles{
      position:absolute;
      right:0;
      z-index: -1;
      width:50;
  }


  @media(min-width:800px){
    display:flex;
  flex-direction:row;
  padding-left:16px;
  h2{
      font-size:0;
  }
  .photos{
      display:flex;
      align-items:center;
      #bolls{
      width:40px;
      height:200px;
      
      margin-right:20px;
    }
  }
  
  #profilePhoto{
    
    width:300px;
  }
  #circles{
      display:flex;
      position:absolute;
      right:0;
      height:150px;
  }
  }
`;

export const Description = styled.div`
    display:flex;
  span{
    font-weight:500;
    color:grey;
    margin: 0 auto;
    max-width:80vw;
    font-size:1.8rem;
  }


  @media(min-width:800px){
    width:600px;
  display: flex;
  justify-content: flex-start;
  flex-direction:column;
  align-items: flex-start;
  margin-left:25px;
  margin-top:-100px;
  .desktop{
    font-size:35px;
    }
     
  
  >span{
    margin-top:15px;
    font-size:22px;
    color:rgba(47, 46, 65, 0.58);
  }
  }
`;