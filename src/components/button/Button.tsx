interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  onClick?: () => void;
  children?: React.ReactNode;
}

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
};

export const Button = ({
  variant = 'primary',
  onClick,
  children,
}: Props): JSX.Element => (
  <button onClick={onClick} type="button" className={`btn ${VARIANTS[variant]} gap-2`}>
    {children}
  </button>
);
