import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';


export const List = styled.ul`
  list-style: circle;
  text-decoration: underline;
  
`;

export const LinkDetails = styled(Link)`
  
`;

LinkDetails.propTypes = {
  cover: propTypes.string,
  placeholder: propTypes.string,
};
