interface Props {
  align: 'left' | 'right';
  children?: React.ReactNode;
}

const VARIANTS = {
  left: 'text-left border-l-2',
  right: 'text-right border-r-2',
};

export const SectionHeading = ({ align, children }: Props): JSX.Element => (
  <h2 className={`text-3xl my-4 font-mono text-primary p-2 border-secondary ${VARIANTS[align]}`}>
    {children}
  </h2>
);
