import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducer';
import thunk from 'redux-thunk';
import GuessedWord from './components/GuessedWords.function/Wrapper';

const reduxStore = createStore(reducers , {} , applyMiddleware(thunk))
const { Wrapper } = GuessedWord
function App() {
  return (
    <Provider store={reduxStore}>
     <Wrapper/>
    </Provider>
  );
}

export default App;
