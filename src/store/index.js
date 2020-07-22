import { createStore } from 'redux';
import { useSelector } from 'react-redux';
import rootReducer from './reducer';

const composeEnhancers =
  process.env.REACT_APP_ENVIRONMENT === 'development' &&
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, composeEnhancers);
export default store;
// export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector = useSelector;
