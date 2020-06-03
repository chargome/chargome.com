import { FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { animated } from 'react-spring';

import breakpoints from '../../styles/breakpoints';

export const Container = styled(animated.div)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.greyLight};
  display: grid;
  justify-content: center;
  padding-left: 10vw;
  padding-right: 10vw;
  @media ${breakpoints.tablet} {
    padding-left: 20vw;
    padding-right: 20vw;
  };
`;

export const BackButton = styled(animated(FaArrowLeft))`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.tealBlue};
  transition: 700ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const Heading = styled(animated.div)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.tealBlue};
  margin-top: 100px;
`;

export const SubHeading = styled(animated.div)`
  font-size: 20px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled('div')`
  margin-top: 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const VideoArea = styled('img')`
  margin-top: 20px;
  min-height: 200px;
  max-width: 100%;
`;
