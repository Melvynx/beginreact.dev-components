import styles from '../exercise/1-style/Exercise1.module.css';

const VariantStyle = {
  primary: {
    ['--background-color']: 'red',
  },
  secondary: {
    ['--background-color']: 'blue',
  },
  default: {
    ['--background-color']: 'gray',
  },
};

const Button = ({ variant, children }) => {
  const variantStyle = VariantStyle[variant];

  return (
    <button className={styles.button} style={variantStyle}>
      {children}
    </button>
  );
};
const Styles = () => {
  return (
    <div>
      <Button variant="primary">Red</Button>
      <Button variant="secondary">Blue</Button>
      <Button variant="default">Default</Button>
    </div>
  );
};

export default Styles;
