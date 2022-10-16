const UserForm = ({ onSubmitUser }) => {
  // 🦁 Crée une fonction handleSubmit qui prend `event` en paramètre.
  // Récupère ensuite les deux données du formulaire (name et password)
  // Pour ça tu peux t'aider en loggant dans la console `event.currentTarget` et en cherchant les propriétés name et password.
  // 💡 Tu peux utiliser `event.currentTarget.elements` pour récupérer les éléments du formulaire.

  // 🦁 Appelle la fonction `onSubmitUser` avec les deux données du formulaire dans un object
  // 💡 onSubmitUser({ name, password })
  // 💡 Ajoute event.preventDefault() pour éviter que la page ne se recharge

  return (
    // 🦁 ajoute onSubmit en passant la fonction handleSubmit
    <form className="vertical-stack form">
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
