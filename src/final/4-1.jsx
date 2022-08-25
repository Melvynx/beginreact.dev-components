import styles from "../styles/Exercise2.module.css";

const Header = () => (
  <header>
    <h1>Mes recettes de cuisine !</h1>
    <p>Par BeginReact.dev</p>
  </header>
)

const ShoppingList = () => (
  <div className="flex flex-col gap-4">
    <h2>Liste de course</h2>
    <div className={styles["shopping-item"]}>
      <div className={styles.section}>
        <p>Carotte !</p>
        <p className={styles.badge}>12</p>
      </div>
      <div className={styles.section}>
        <input type="checkbox" />
      </div>
    </div>
    <div className={styles["shopping-item"]}>
      <div className={styles.section}>
        <p>Patate !</p>
        <p className={styles.badge}>11</p>
      </div>
      <div className={styles.section}>
        <input type="checkbox" />
      </div>
    </div>
    <div className={styles["shopping-item"]}>
      <div className={styles.section}>
        <p>Haricot !</p>
        <p className={styles.badge}>54</p>
      </div>
      <div className={styles.section}>
        <input type="checkbox" />
      </div>
    </div>
  </div>
)

const Recipies = () => (
  <div className="flex flex-col gap-4">
    <h2>Liste de recette à faire</h2>
    <ul className="flex flex-col gap-2">
      <li className="flex gap-4">
        <span>Tarte à la carotte</span>
        <p className={styles.badge}>11.06.22</p>
      </li>

      <li className="flex gap-4">
        <span>Purée de patate</span>
        <p className={styles.badge}>15.08.23</p>
      </li>

      <li className="flex gap-4">
        <span>Sauce au haricot</span>
        <p className={styles.badge}>22.09.24</p>
      </li>
    </ul>
  </div>
)

const Footer = () => (
  <footer>
    <p>Create by BeginReact.dev</p>
  </footer>
)

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
