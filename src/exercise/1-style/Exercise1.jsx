import './global.css';

// 🦁 Utilise la balise style pour ajouté les bonnes couleurs pour chaque button.
// `backgroundColor: 'red'`
// On utilise `backgroundColor` et pas `background-color` car on est dans du JavaScript et
// pas dans du CSS.
const Button = ({ variant, children }) => {
  if (variant === 'red') {
    return <button className="red">{children}</button>;
  }

  if (variant === 'blue') {
    return <button style={{}}>{children}</button>;
  }

  return <button style={{}}>{children}</button>;
};

const Styles = () => {
  return (
    <div>
      <Button variant="red">Red</Button>
      <Button variant="blue">Blue</Button>
      <Button variant="default">Default</Button>
    </div>
  );
};

export default Styles;
