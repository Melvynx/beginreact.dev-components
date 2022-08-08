import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './chore/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
