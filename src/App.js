import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducer';

const reduxStore = createStore(reducers)

function App() {
  return (
    <Provider store={reduxStore}>
     <p>
       Guessed Words
     </p>
    </Provider>
  );
}

export default App;
