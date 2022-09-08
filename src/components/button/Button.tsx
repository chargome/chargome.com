interface Props {
  color?: 'primary' | 'secondary' | 'accent';
  variant?: 'outlined' | 'ghost';
  onClick?: () => void;
  children?: React.ReactNode;
}

const COLORS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
};

const VARIANTS = {
  outlined: 'btn-outline',
  ghost: 'btn-ghost',
};

export const Button = ({
  color = 'primary',
  variant = 'outlined',
  onClick,
  children,
}: Props): JSX.Element => (
  <button
    onClick={onClick}
    type="button"
    className={`btn ${COLORS[color]} ${VARIANTS[variant]} gap-2 font-mono`}
  >
    {children}
  </button>
);
