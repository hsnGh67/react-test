import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducer';
import thunk from 'redux-thunk';

const reduxStore = createStore(reducers , {} , applyMiddleware(thunk))

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
