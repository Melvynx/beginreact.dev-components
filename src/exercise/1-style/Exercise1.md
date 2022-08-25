# Style

Pour une page web, il te faut des styles.

Il y a de nombreuses façons de faire les styles en React et je vais **t'en présenter 5.**

PS : oui tu vas devoir update toujours le même fichier en modifiant
les styles donc tu vas à chaque exercise devoir supprimer ce que tu as fait.
Mais les solutions sont là pour garder l'historique.

## Exercise 1 - Plain style

En react comme en HTML tu peux simplement utiliser la propriété `style` pour définir un style.

En HTML tu fais comme ça

```html
<div style="color: red;">Hello</div>
```

Mais en JSX tu vas devoir faire comme ceci. Utilisé un object.

```jsx
<div style={{ color: 'red' }}>Hello</div>
```

[📖 Doc React sur les styles](https://fr.reactjs.org/docs/dom-elements.html#style)

L'avantage, c'est que ce sera typé.

Tu peux avoir la maquette ici. Utilise la propriété `style` pour définir un style.

Instruction dans le fichier de l'exercise.

PS : les boutons ont un style par défaut dans le fichier `index.css`, on change juste le background-color ici.

- 💌 Tu apprends à utiliser les inline style en React.

### Problème

- duplication des styles
- pas possible d'utiliser les pseudo-classes (hover)
- pas possible d'utiliser les media queries
- rend les fichiers moins lisibles

## Exercise 2 - Global style

On va crée des styles globals.

Tu peux aller dans le fichier `src/exercise/1-style/global.css` et voir qu'il existe déjà un style pour `.customButton`.

Pour que les styles fonctionne, il va falloir importer le fichier `global.css` dans le fichier `Exercise1.js`.

`import "./global.css";`

Pour t'apprendre une technique tu retrouveras dans le fichier `global.css` une css variable.
C'est `var(--background-color)`. On va passer par le tag `style` pour définir la css variable.

Je te laisse essayer de trouver le moyen de faire ça et je t'explique tout dans la solution.

[📖 Doc React sur les ClassName](https://fr.reactjs.org/docs/faq-styling.html)

**Modifie notre button avec des globaux styles.**

### Problème

- toute l'application va avoir ce style (si un autre button dans l'application a la class `customButton`, c'est le style qui sera appliqué)
  - avec plus de 100 components je peux te dire que les styles globaux vont devenir un joyeux bordel
- il faut chercher ou les styles ont été définis

💌 Tu apprends à utiliser les globaux styles et tu comprends le problème.

## Exercise 3 - CSS Module

C'est celui qu'on va utiliser dans le cadre de cette formation.

C'est la même chose que les globaux styles dans l'aspect, mais ils sont "scopés" à ton composant.
C'est-à-dire que la class `customButton` ne sera qu'accessible dans le fichier `Exercise1.jsx` ou
tout autre fichier qui import le `Composant.module.css`.

Tu dois nommer tes fichiers CSS Module comme çA : `ComponentName.module.css`.

Ensuite pour l'utiliser tu peux l'importer comme ceci :

`import styles from "./Composant.module.css";`

Dans le fichier tu pourras mettre par exemple :

```css
.button {
  background-color: red;
}
```

Et tu pourras donc utiliser les styles comme ceci :

```jsx
<button className={styles.button}>Hello</button>
```

J'explique les détails dans la correction.

**Modifie notre button avec des css module.**

Le fichier existe déjà (`Exercise1.module.css`)

- 💌 Tu comprends comment fonctionne les CSS Module et leur utilité.

## Exercise 4 - Tailwind CSS

Tailwind est le framework populaire du moment. Dans le projet final de
cette formation, on va l'utiliser pour notre projet.

Il faut donc que tu saches le maîtriser.

Avec Tailwind je vais te faire découvrir le lib incontournable : `clsx`.

Déjà Tailwind est une library "Utility First". Elle offre des classes
prédéfinit qui te permettre d'ajouter des styles sans passer par un fichier
CSS. Directement dans le HTML.

Tailwind possède un Playground ou tu peux t'amuser, je t'ai [préparé
une démo](https://play.tailwindcss.com/ZtvTfomsMR) qui vient de [hyperui
](https://www.hyperui.dev/components/marketing/buttons) qui est une library
de composant pour Tailwind. Tu as juste à copier-coller le code HTML.

Tailwind est très optimisé, c'est-à-dire qu'il va ajouter à ton Application
**uniquement les classes que tu utilises dans ton app.**

Par exemple si on a une app qui possède uniquement ce button :
```html
<button class="bg-red-500 p-2 rounded-lg text-white">Hello</button>
```

Tailwind va générer ce CSS : 
```css
.rounded-lg {
  border-radius: 0.5rem;
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.p-2 {
  padding: 0.5rem;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
```

**Et pas de CSS en plus inutile.**

Pour faire notre bouton, n'oublie pas que tu dois ajouter le padding. Puis
les couleurs en fonction de `variant`.

[📖 Tailwind - bg-color](https://tailwindcss.com/docs/background-color)

Ensuite la library [NPM clsx](https://www.npmjs.com/package/clsx) est juste 
un utilitaire pour faire des className.

Voici un petit exemple : 
```jsx
<button className={clsx("button", { ["red"]: true, ["blue"]: false })}>
  Hello
</button>
// Equal
<button className="button red">Hello</button>
```

Elle permet d'ajouter conditionnellement des classes CSS. Evident dans
une application, ce ne sera pas `true` ou `false` mais une vraie condition
comme 💡`variant === "primary"`.

À toi de jouer !

- 💌 Tu comprends comment fonctionne `Tailwind` et `clsx`

## Exercise 5 - Styled-components : css-in-js

[Styled-components](https://styled-components.com/docs/basics) est une library React pour faire des styles.

Elle fait ses styles directement dans le JS.

Elle va générer des classes name unique pour nos composants. Cette library va nous permettre
de faire des styles, gérer les variants, le thème etc...

J'en aborde le sujet dans la formation **pour que tu saches que ça existe.**

On ne va pas aborder toute la puissance de ce genre de library mais c'est très utilisé
dans l'industrie.

### Usage

```jsx
const Button = styled.button({
  // en utilisant une fonction tu va pouvoir définir des styles conditionnellement
  // ici avec un block
  backgroundColor: (props) => {
    if (props.variant === 'red') return 'red';
    else if (props.variant === 'green') return 'green';
    else return 'white';
  },
  color: 'white',
  // ici j'utilise un ternaire pour définir la largeur du bouton en fonction
  // de la props "size"
  padding: (props) => (props.size === 'sm' ? '8px 12px' : '16px 20px'),
});

const Demo = () => {
  return (
    <div>
      <Button variant="red" size="sm">Hello</Button>
      <Button variant="green">Hello</Button>
    </div>
  );
}
```

**Modifie notre button avec des styled-components.**

- 💌 Tu découvres le `CSS-in-JS` et tu sais qu'il existe.