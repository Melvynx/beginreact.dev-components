const VariantStyle = {
  primary: {
    backgroundColor: 'red',
  },
  secondary: {
    backgroundColor: 'blue',
  },
  default: {
    backgroundColor: 'gray',
  },
};

const Button = ({ variant, children }) => {
  const variantStyle = VariantStyle[variant];

  return (
    <button
      style={{
        padding: '8px 16px',
        ...variantStyle,
      }}
    >
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
