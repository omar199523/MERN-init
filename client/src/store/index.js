import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reduser";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

const middleware = [thunk];
export const history = createBrowserHistory()


export default function store(initialState) {
    const store = createStore(
      rootReducer(history), // root reducer with router state
      initialState,
      compose(
        applyMiddleware(
          routerMiddleware(history),thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
      ),
    )
  
    return store
  }


