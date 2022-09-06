import styles from "../styles/Exercise2.module.css";

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
);

const shoppingItems = [
  { name: "Carotte", quantity: 12 },
  { name: "Patate", quantity: 11 },
  { name: "Haricot", quantity: 54 },
];

const ShoppingItem = (item) => (
  <div className={styles["shopping-item"]}>
    <div className={styles.section}>
      <p>{item.name}</p>
      <p className={styles.badge}>{item.quantity}</p>
    </div>
    <div className={styles.section}>
      <input type="checkbox" />
    </div>
  </div>
);

const ShoppingList = () => (
  <div className="flex flex-col gap-4">
    <h2>Liste de course</h2>
    {shoppingItems.map((item) => (
      <ShoppingItem key={item.name} {...item} />
    ))}
  </div>
);

const recipies = [
  { name: "Tarte à la carotte", date: "11.06.22" },
  { name: "Purée de patate", date: "15.08.23" },
  { name: "Sauce au haricot", date: "22.09.24" },
];

const RecipeItem = (recipe) => (
  <li className="flex gap-4">
    <span>{recipe.name}</span>
    <p className={styles.badge}>{recipe.date}</p>
  </li>
);

const Recipies = () => (
  <div className="flex flex-col gap-4">
    <h2>Liste de recette à faire</h2>
    {recipies.map((recipe) => (
      <RecipeItem key={recipe.name} {...recipe} />
    ))}
  </div>
);

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
);

const App = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <hr />
      <ShoppingList />
      <hr />
      <Recipies />
      <hr />
      <Footer />
    </div>
  );
};

export default App;
