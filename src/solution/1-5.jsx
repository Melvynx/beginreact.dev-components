import styled from 'styled-components';

const Button = styled.button({
  padding: '16px 8px',
  backgroundColor: (props) => {
    if (props.variant === 'primary') return 'red';

    if (props.variant === 'secondary') return 'blue';

    return 'gray';
  },
});

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
