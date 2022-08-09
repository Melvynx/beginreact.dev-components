import '../exercise/1-style/global.css';

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
    <button className="customButton" style={variantStyle}>
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
