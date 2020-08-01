import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  margin-top: 250px;
  padding-left:32px;
  .photos{
      display:flex;
      align-items:center;
  }
  #bolls{
      height:200px;
      margin-right:20px;
  }
  #profilePhoto{
    height:250px;
    width:250px;
  }
  #circles{
      display:flex;
      position:absolute;
      right:0;
      height:150px;
  }
  
`;



export const Description = styled.div`
  
  width:600px;
  display: flex;
  justify-content: flex-start;
  flex-direction:column;
  align-items: flex-start;
  margin-left:25px;
  margin-top:20px;
  >h2{
     font-size:35px;
  }
  >span{
    margin-top:15px;
    font-size:22px;
    color:rgba(47, 46, 65, 0.58);
  }
`;
