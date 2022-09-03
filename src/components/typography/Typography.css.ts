import React from 'react';
import styled from 'styled-components';
import {
  typography, TypographyProps, color, ColorProps,
} from 'styled-system';

interface Props extends TypographyProps, ColorProps {
  children: React.ReactNode;
}

export const Wrapper = styled('div')<Props>(
  typography,
  color,
);
