# Première List !

Dans une application, on a très souvent des listes de données qu'on a envies d'afficher.

Donc comment afficher cette liste par exemple ?

```js
const vegetables = ['carrot', 'tomato', 'cucumber', 'celery'];
```

La [beta documentation de React](https://beta.reactjs.org/learn/rendering-lists) explique très bien les listes.

Mais expliqué est une chose, pratiquer en est une autre.

Comme React c'est du JSX et donc du JS pour parcourir une liste on utilise `.map`.

```js
const vegetables = ['carrot', 'tomato', 'cucumber', 'celery'];

const VegetablesList = () => {
  return (
    <ul>
      {vegetables.map((vegetable) => (
        <li key={vegetable}>{vegetable}</li>
      ))}
    </ul>
  );
};
```

Je m'arrête ici pour la théorie. Dans la vidéo solution, je vais vraiment t'expliquer
comment ce `map()` fonctionne.

## Exercise 1

Premier petit exercise ou tu vas devoir crée une interface.

Je te propose de crée une liste de course. Dans le fichier exercise tu trouveras
la liste de course et je souhaite que tu crée une belle interface pour l'afficher.

## Exercise 2 - Conditional Rendering

Dans `ShoppingItem` j'aimerais bien que si la quantités est égal à 0 : 
- rien ne s'affiche

Si la quantités est à 1 :
- le badge n'est pas affiché

## Exercise 2 - Key

Il n'y a rien à faire. 

Regarde juste la solution et amuse toi avec en commentant / décommentant
la props "key" dans la liste et regarde comment la checkbox réagis quand tu supprime des éléments.

Regarde la vidéo solution après avoir fait ceci.

## Exercise 3 - Key

Il n'y a rien à faire.

Regarde juste la solution et place ton curseur dans les inputs puis attend et regarde
comment React gère ton curseur en fonction des différent input.