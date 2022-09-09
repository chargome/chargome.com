import React from 'react';

interface Props {
  name: string;
  icon: React.ReactNode;
  primary: string;
  bg: string;
  active?: boolean;
}

export const ThemePreview = ({
  name, icon, primary, bg, active,
}: Props): JSX.Element => (
  <div
    className="flex p-3 gap-2 rounded-md cursor-pointer"
    style={{
      backgroundColor: bg,
      color: primary,
      border: '2px solid',
      borderColor: primary,
    }}
  >
    {icon}
    {`${name}${active ? ' 👈' : ''}`}
  </div>
);
