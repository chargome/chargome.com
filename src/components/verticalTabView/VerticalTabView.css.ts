import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';

export const TabViewContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "nav nav nav nav"
    "content content content content";
  margin: auto;
  min-height: 50vh;
  color: ${({ theme }) => theme.colors.greyLight};
  @media ${breakpoint.tablet} {
    min-height: 30vh;
    grid-template-areas:
      "nav content content content"
      "nav content content content";
    width: 70%;
  };
  @media ${breakpoint.desktop} {
    width: 50%;
  };
`;

export const NavContainer = styled.div`
  overflow-x: auto;
  display: flex;
  @media ${breakpoint.tablet} {
    height: 150px;
    display: grid;
    grid-area: nav;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

type NavElementProps = { active: boolean };
export const NavElement = styled('div')<NavElementProps>`
  display: flex;
  justify-content: center;
  min-width: 200px;
  border-bottom: 3px solid ${(props) => (props.active ? props.theme.colors.teaGreen : props.theme.colors.tealBlue)};
  background-color: ${(props) => (props.active ? 'rgba(207, 224, 195, 0.2)' : props.theme.colors.primary)};
  color: ${(props) => props.theme.colors.greyLight};
  height: 40px;
  transition: 0.7s;
  border-radius: 1px 0px 0px 1px;
  padding: 10px;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
  @media ${breakpoint.tablet} {
    height: auto;
    justify-content: flex-end;
    border-bottom: none;
    border-right: 3px solid ${(props) => (props.active ? props.theme.colors.teaGreen : props.theme.colors.tealBlue)};
  }
`;

export const ContentContainer = styled.div`
  grid-area: content;
  padding-left: 20px;
  padding-top: 20px;
`;

export const ContentHeading = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 25px;
`;

export const SubHeading = styled.a`
  color: ${({ theme }) => theme.colors.tealBlue};
  font-size: 16px;
`;

export const ContentRange = styled.div`
  color: ${({ theme }) => theme.colors.tealBlue};
  font-size: 16px;
`;

export const ContentText = styled.div`
  color: ${({ theme }) => theme.colors.teaGreen};
  font-size: 14px;
  padding: 20px;
`;
