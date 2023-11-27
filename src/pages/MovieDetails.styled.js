import styled from 'styled-components';
import propTypes from 'prop-types';



export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 30px;
`;

export const Image = styled.img`
  max-height: 480px;
  align-self: flex-start;
`;

export const Description = styled.div`
  flex: 1 1 auto;
`;

Container.propTypes = {
  backdrop: propTypes.string,
};
