import styled from 'styled-components';

export const ListItem = styled.li`
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
width: 290px;
&:not(:last-child) {
    margin-bottom: 10px;
`;
export const List = styled.ul`
padding:0;
`;
export const Button = styled.button`
display: block;
width: 30px;
hight: 30px;
padding: 5px 5px;
text-align:centre;

border: none;
border-radius: 50%;
font-weight: 600;
background-color: #ff1552;
cursor: pointer;
color: #efe6e6;
`
