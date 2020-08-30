import { createStore } from 'redux';
import reducer from './Reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, composeEnhancers);
