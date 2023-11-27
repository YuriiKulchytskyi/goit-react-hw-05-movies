import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: auto;
`;

export const Header = styled.header`
nav{
 display: flex;
 flex-direction: row;
 padding: 10px 0 10px 30px;
 box-sizing: border-box;
 background-color: #f0f0f0;
 column-gap: 15px;
}
`;



export const Links = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;

