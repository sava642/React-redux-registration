
import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  border-radius: 5px;
  padding: 10px;
  backdrop-filter: blur(10px);
  @media (max-width: 575.98px) {
    width: 100%;
  padding: 20px;
    
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family:"Montserrat",sans-serif;
color:#efe6e6;
font-weight:400;
font-size:0.938rem;
line-height: 1.15;
`
export const Button = styled.button`
width: 100 %;
padding: 10px ;
margin-top: 10px;
border: none;
border-radius: 10px;
font-weight: 600;
background-color: #ff1552;
cursor: pointer;
color: #efe6e6;
`




