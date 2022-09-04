import { Wrapper } from './Typography.css';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'bodySm';
  children: React.ReactNode;
  align?: 'center' | 'right' | 'left';
  color?: string;
}

const HEIGHT_VARIANTS = {
  h1: '2rem',
  h2: '1.7rem',
  h3: '1.5rem',
  h4: '1.2rem',
  h5: '1rem',
  body: '0.9rem',
  bodySm: '0.7rem',
};

export const Typography = ({
  variant, children, align = 'left', color = 'primary',
}: Props): JSX.Element => (
  <Wrapper
    color={color}
    fontSize={HEIGHT_VARIANTS[variant]}
    textAlign={align}
  >
    {children}
  </Wrapper>
);
