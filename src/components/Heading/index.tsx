import stiles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={stiles.heading}>{children}</h1>;
}
