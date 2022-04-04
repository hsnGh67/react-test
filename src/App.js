import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducer';
import thunk from 'redux-thunk';
import GuessedWordClass from './components/GuessedWords.class/GuessedWord.class';

const reduxStore = createStore(reducers , {} , applyMiddleware(thunk))

function App() {
  return (
    <Provider store={reduxStore}>
     <GuessedWordClass/>
    </Provider>
  );
}

export default App;
