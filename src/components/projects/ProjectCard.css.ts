import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const CardContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "gif gif gif gif gif"
    "gif gif gif gif gif"
    "txt txt txt txt txt"
    "txt txt txt txt txt";
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background-color: ${({ theme }) => theme.colors.greyLight};
  margin: 30px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.strong};
  @media ${breakpoints.tablet} {
    grid-template-areas:
      "gif gif txt txt txt"
      "gif gif txt txt txt"
      "gif gif txt txt txt"
      "gif gif txt txt txt";
    width: 700px;
    margin: 60px;
    height: 146px;
    filter: grayscale(100%);
    transition: 700ms;
    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    };
  };
  @media ${breakpoints.laptop} {
    width: 870px;
    height: 180px;
  };
  overflow: hidden;
`;

export const VideoArea = styled('img')`
  grid-area: gif;
  max-width: 100%;
  justify-self: center;
  align-self: center;
  border-radius: 4px 4px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadows.bottomOnly};
  @media ${breakpoints.tablet} {
    border-radius: 4px 0px 0px 4px;
    box-shadow: ${({ theme }) => theme.shadows.rightOnly};
  }
`;

export const TextArea = styled('div')`
  padding: 10px;
  display: grid;
  # align-content: center;
  grid-gap: 0px;
  grid-area: txt;
`;

export const Title = styled('div')`
  color: ${({ theme }) => theme.colors.tealBlue};
  font-size: 25px;
  @media ${breakpoints.tablet} {
    font-size: 30px;
  }
`;

export const Subtitle = styled('div')`
  color: ${({ theme }) => theme.colors.teaGreen};
  font-size: 15px;
  @media ${breakpoints.tablet} {
    font-size: 20px;
  }
`;
