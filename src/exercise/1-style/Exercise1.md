# Style

Pour une page web, il te faut des styles.

Il y a de nombreuse façon de faire les styles en React et je vais toute te les
faire testé.

PS : oui tu vas devoir update toujours le même fichier avec les mêmes styles.
Mais les solutions sont la pour garder l'historique.

## Exercise 1 - Plain style

En react comme en HTML tu peux simplement utilisé la propriété `style` pour définir un style.

En HTML tu fais comme ça

```html
<div style="color: red;">Hello</div>
```

Mais en JSX tu vas devoir faire comme ceci. Utilisé un object.

```jsx
<div style={{ color: 'red' }}>Hello</div>
```

L'avantage c'est que ce sera typé.

Tu peux avoir la maquette ici. Utilise la propriété `style` pour définir un style.

https://www.figma.com/file/pvwkLh3ucG3tDvyYCraB0e/BeginReact.dev?node-id=5%3A923

Instruction dans le fichier de l'exercise.

PS : les boutons on un style par défaut dans le fichier `index.css`, on change juste le background-color ici.

### Problème

- duplication des styles
- pas possible d'utiliser les pseudo-classes (hover)
- pas possible d'utiliser les media queries
- rend les fichiers moins lisible

## Exercise 2 - Global style

On va crée des styles globals.

Tu peux allé dans le fichier `global.css` et voir qu'il existe déjà un style pour `.customButton`.

Pour que les styles fonctionne, il va falloir importé le fichier `global.css` dans le fichier `Exercise1.js`.

`import "./global.css";`

Pour t'apprendre une technique tu retrouvera dans le fichier `global.css` une css variable.
C'est `var(--background-color)`. On va passé par le tag `style` pour définir la css variable.

Je te laisse essayer de trouver le moyen de faire ça et je t'explique tout dans la solution.

### Problème

- toutes l'application va avoir ce style (si un autre button dans l'application a la class `customButton`, c'est le style qui sera appliqué)
  - avec plus de 100 components je peux te dire que les styles globaux vont devenir un joyeux bordel
- il faut chercher ou les styles ont été définit

**Modifie notre button avec des globals styles.**

## Exercise 3 - CSS Module

C'est celui qu'on va utilisé dans le cadre de cette formation.

Il combine global style et styled-components.

On va définir dans des fichier CSS des styles qui seront utilisé par nos composants
localement.

Le nommage est : `Composant.module.css`.

Ensuite pour l'utiliser tu peux l'importer comme ceci :

`import styles from "./Composant.module.css";`

Dans le fichier tu pourras mettre par exemple :

```css
.red {
  background-color: red;
}
```

Et tu pourras donc utiliser les styles comme ceci :

```jsx
<button className={styles.button}>Hello</button>
```

L'avantage c'est que t'es styles sont **scopée** dans ton composants.

J'explique tout ça dans la correction.

**Modifie notre button avec des css module.**

le fichier existe déjà (`Exercise1.module.css`)

## Exercise 4 - Styled-components : css-in-js

[Styled-components](https://styled-components.com/docs/basics) est une library React pour faire des styles.

Elle fait ses styles directement dans le JS.

Elle va générer des classes name unique pour nos composant. Cette library va nous permettre
de faire des styles, gérer les variants, le thème etc...

J'en aborde le sujet dans la formation **pour que tu sache que ça existe.**

On ne va pas aborder toute la puissance de ce genre de library mais c'est très utilisé
dans l'industrie.

#### Usage

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
```

**Modifie notre button avec des styled-components.**
