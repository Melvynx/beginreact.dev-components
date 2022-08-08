import Styles from '../exercise/1-style/Exercise1';
import ShoppingList from '../exercise/2-list/Exercise2';
import Form from '../exercise/3-form/Exercise3';
import Solution1Exercise1 from '../final/1-1';
import Solution2Exercise1 from '../final/2-1';
import Solution2Exercise2 from '../final/2-2';
import Solution2Exercise3 from '../final/2-3';
import Solution3Exercise1 from '../final/3-1';
import Solution3Exercise2 from '../final/3-2';
import Solution3Exercise3 from '../final/3-3';
import Solution3Exercise4 from '../final/3-4';
import Solution3Exercise5 from '../final/3-5';

export const EXERCISES = [
  {
    name: '1-style',
    parts: {
      exercise: <Styles />,
      solutions: [<Solution1Exercise1 key={1} />],
    },
  },
  {
    name: '2-basic-list',
    parts: {
      exercise: <ShoppingList />,
      solutions: [
        <Solution2Exercise1 key={1} />,
        <Solution2Exercise2 key={2} />,
        <Solution2Exercise3 key={3} />,
      ],
    },
  },
  {
    name: '3-form',
    parts: {
      exercise: <Form />,
      solutions: [
        <Solution3Exercise1 key={1} />,
        <Solution3Exercise2 key={2} />,
        <Solution3Exercise3 key={3} />,
        <Solution3Exercise4 key={4} />,
        <Solution3Exercise5 key={5} />,
      ],
    },
  },
];
