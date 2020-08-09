import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 100px;
  margin-left: 32px;
  margin-right:32px;
  align-items:center;
`;
export const TitlePortlofio = styled.div`
    display: flex;
  flex-direction:column;
  align-items:center;
  div{
      height:3px;
      width:120px;
      background-color:#3469D0;
  }
  h3{
      color:#3469D0;
      font-size:24px;
  }
  h1{
    font-size:54px;
  }
`;

export const ListProjects = styled.ul`
    margin-top: 64px;
    list-style: none;
    white-space: nowrap;
    overflow-x: scroll;
    width: 90vw;

    li + li {
        margin-left:25px;
    }

    
    
`
export const ItemProject = styled.li`
    position:relative;
    height:350px;
    width: 340px;
    display: inline-block;
    background-color: ${props => (props.className === "outline" ? `transparent` : `#7196FF`)};
    border-radius:8px;
    /* margin-left:25px; */
    border: ${props => (props.className === "outline" ? `1px solid #C4C4C4` : `0px solid transparent`)};
    

     div {
        height: 100%;
        display:flex;
        align-items:center;
        text-align:center;
        flex-direction:column;
        
        white-space: normal;
        h2{
            font-size:2.8rem;
            color:${props => (props.className === "outline" ? `#7196FF` : `white`)};
            margin-top:24px;
        }
        h4{
            font-size:1.8rem;
            margin-top:24px;
            padding-right:24px;
            padding-left:24px;
            font-weight:500;
            color:${props => (props.className === "outline" ? `rgba(47, 46, 65, 0.58)` : `white`)};
        }
        a{
            position:absolute;
            bottom:0;
            display:flex;
            align-items:center;
            justify-content:center;
            text-decoration:none;
            height:35px;
            width:100px;
            background-color:#3469D0;
            border-radius:8px;
            transition: background-color 0.5s;
            color:white;
            font-size:16px;
            font-weight:600;
            margin-bottom:50px;
            :hover{
                background-color :#5976AF;
            }
        }
    }
`