import { createStore, applyMiddleware, combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducer } from './reducer/carsReducer';
import { alertsReducer } from './reducer/alertsReducer';
const composeEnhancers = composeWithDevTools({

});
const rootReducer = combineReducers(
    {
        carsReducer,
        alertsReducer
    }
)
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
export default store;