import { useState } from 'react';
import styles from '../styles/Exercise2.module.css';

const ShoppingListData = [
  { id: 1, name: 'Milk', quantity: 2, checked: false },
  { id: 2, name: 'Eggs', quantity: 12, checked: true },
  { id: 3, name: 'Bread', quantity: 1, checked: false },
];

const ItemsToAdd = ['banana', 'apple', 'orange', 'pear', 'grape', 'strawberry'];

const ShoppingItem = ({ name, quantity, checked, onRemove }) => {
  return (
    <div className={styles['shopping-item']}>
      <div className={styles.section}>
        <p>{name}</p>
        <p className={styles.badge}>{quantity}</p>
      </div>
      <div className={styles.section}>
        <button onClick={onRemove}>Remove</button>
        <input type="checkbox" defaultChecked={checked} />
      </div>
    </div>
  );
};

const ShoppingList = () => {
  const [items, setItems] = useState(ShoppingListData);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles['shopping-list']}>
      <h2>Shopping List</h2>

      <button
        onClick={() => {
          setItems([
            ...items,
            {
              id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
              name: ItemsToAdd[Math.floor(Math.random() * ItemsToAdd.length)],
              quantity: Math.round(Math.random() * 100),
              checked: false,
            },
          ]);
        }}
      >
        Add an items
      </button>

      <div className={styles['shopping-list-items']}>
        {items.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <ShoppingItem
            // 🦁 Décommente ou commente cette ligne et test !
            // key={item.id}
            name={item.name}
            quantity={item.quantity}
            checked={item.checked}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
