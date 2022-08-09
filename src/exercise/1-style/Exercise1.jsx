// 🦁 Utilise la balise style pour ajouté les bonnes couleurs pour chaque button.
// "primary" => "red"
// "secondary" => "blue"
// "default" => "gray"

// 🦁 Je souhaite aussi (pour toutes les variants) que le bouton est un padding de `8px 16px`

// 💡 `backgroundColor: 'red'`
// On utilise `backgroundColor` et pas `background-color` car on est dans du JavaScript et
// pas dans du CSS.
const Button = ({ variant, children }) => {
  return <button>{children}</button>;
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
