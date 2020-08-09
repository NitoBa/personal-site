import styled from 'styled-components';

export const Container = styled.div`
  header{
      background-color:white;
      display:flex;
      align-items:center;
      padding:1.2rem 1.6rem;
      .contentHeader{
        display:flex;
        align-items:center;
        img{
            width:5.6rem;
            height:5.6rem;
            border-radius:50%;
        }
        .username{
            color:var(--primaryColorDark);
            font-size:1.8rem;
            margin-left:0.8rem;
        }
        
      }
      .contentActions{
            h1{
                font-size:0;
            }
            
        }
  }

  @media(min-width:800px){
    header{
      z-index:1;
      background-color:transparent;
      display:flex;
      align-items:center;
      justify-content:space-between;

      padding:1.8rem 3.2rem;
      img{
          width:6.4rem;
          height:6.4rem;
          border-radius:50%;
      }

      .contentHeader{

        .username{
            color:var(--primaryColorDark);
            font-size:2.5rem;
            margin-left:0.8rem;
        }
      }

      .contentActions{
        z-index:1;
        
        display:flex;
        align-items:center;
        justify-content:space-between;
        width: 50vw;
            h1{
                color:white;
                font-size:2.5rem;
            }
            a{
                background-color:transparent;
                text-decoration:none;

                div{
        
                    background-color:white;
                    width:0px;
                    height:5px;
                    transition: width 1s;
            
                }

                :hover{
                    div{
                        width:86px;
                    }
       
                }
            }

            
        }
  }
  }
`;
