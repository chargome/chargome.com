import React from 'react';
import { Footer, Nav } from '../components';
import { ThemeSelector } from '../components/themeSelector';
import { FooterType } from '../model/md/Footer';

interface Props {
  children?: React.ReactNode;
  footerData: FooterType;
}

export const PageLayout = ({ children, footerData }: Props): JSX.Element => (
  <>
    <Nav />
    <ThemeSelector />
    {children}
    <Footer {...footerData} />
  </>
);
