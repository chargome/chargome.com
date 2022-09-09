import React from 'react';
import { FooterType } from '../../model/md/Footer';

const Footer: React.FC<FooterType> = ({ content }) => (
  <div className="bg-primary flex items-center justify-center">
    <div
      className="p-4 text-2xs text-secondary"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default Footer;
