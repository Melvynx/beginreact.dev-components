# Formulaire

Les applications web sont majoritairement construites à partir de formulaires.

Il y a plusieurs moyens de gérer les formulaires en React.

Nous allons en voir 4.

## Exercise 1 - Basic

Nous allons récupérer les données de notre formulaire en utilisant l'API basique du
browser avec `onSubmit`.

On récupère l'event puis on va chercher les données qui nous intéressent dans l'event.

💡 Rajoutent des IDs à vos inputs pour que tu puisses les récupérer plus simplement
ainsi que le `htmlFor` des labels.

💌 Tu apprends à gérer les formulaires dans leur forme la plus simple

## Exercise 2 - useRef

Nous allons utiliser `useRef` pour récupérer les données de notre formulaire.

Oui nous n'avons pas encore vu `useRef`, mais c'est une intro sur le terrain.

Pour comprendre tu peux lire [la doc de React](https://beta.reactjs.org/apis/useref#manipulating-the-dom-with-a-ref).

💡 Tu peux nommer `usernameRef` et `passwordRef` les refs.
💡 Tu peux récupérer les données de `usernameRef` et `passwordRef` dans la fonction `handleSubmit`.

ℹ️ PS : Oui nous n'avons pas encore vu le `useRef`, c'est une découverte à l'aveugle
que je te propose ici.

💌 Tu découvres le `useRef` dans son usage le plus basique avec un formulaire.

## Exercise 3 - Validate

Si tu as un champ que tu souhaites faire valider, tu peux utiliser un `state` pour le faire.

Tu rajoute un state `error` (📖 [useState](https://beta.reactjs.org/apis/usestate#usage)).

Dans le onSubmit, tu vérifies que la longueur du password est de minimum 8 characters,
si ce n'est pas le cas tu peux changer `error` en `"Password must be at least 8 characters long"`.

Ensuite afficher en rouge le message d'erreur sous le champ password.

ℹ️ PS : Oui nous n'avons pas encore vu le `useState`, c'est une découverte à l'aveugle
que je te propose ici.

En plus, lors que l'user écrit dans le champ password, tu supprimes le message d'erreur. 
(📖 [React event](https://reactjs.org/docs/handling-events.html))

💌 Tu comprends comment gérer les erreurs dans un formulaire avec des states.

## Exercise 4 - Controlled Input

Voici le dernier moyen de gérer les formulaires en React, c'est un `controlled input`.

C'est quand tu définis une `value` à ton input. Dans ce cas, tu dois gérer entièrement la valuer
de l'input. Donc quand il change, tu dois écouter le `onChange` event et update
la valeur de l'input en fonction.

ℹ️ PS : Oui nous n'avons pas encore vu le useState, c'est une découverte à l'aveugle
que je te propose ici.

[TODO: Mettre le lien de l'article de blog ici]()

```jsx
const Input = () => {
  const [value, setValue] = useState(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={onChange} />;
};
```

**Remplace le useRef par un state et change les inputs en `controlled input`**
Attention il ne faut pas oublié de réinitialisé l'erreur dans le onChange du password.
Et il faut laisser la gestion de l'erreur dans le onSubmit.

💌 Tu comprends la différence entre un `controlled input` et un `uncontrolled input`.
💌 Grace à l'article de blog, tu comprends que l'un provoque plus de render.

## Exercise 5 - react-use-form-hook

Maintenant on va **tout** remplacer par un `useForm` hook.

Utilise [react-hooks-form](https://react-hook-form.com/get-started) pour refaire
le formulaire ci-dessus. (avec la validation du password)

Les formulaires sont tellement présents sur le web qu'il est souvent conseillé d'utiliser
une library pour gérer leur states et leurs erreurs.

Je t'en explique plus dans la vidéo solution.

⚠️ Si c'est compliqué, ne reste pas bloquer et vas regarder les vidéos de réponse ou
les fichiers solutions.

Comme dans la vraie vie, va lire la documentation de `react-hook-form` et adapte là pour
notre application.

💌 Tu comprends l'utilité de la library `react-hook-form` ainsi que son usage