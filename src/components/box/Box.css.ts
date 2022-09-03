import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  layout,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface Props extends
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  TypographyProps {
  children?: React.ReactNode;
}

export const Box = styled('div')<Props>(
  space,
  color,
  layout,
  border,
  flexbox,
  typography,
);
