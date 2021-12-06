import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertsReducer } from "./reducers/alertsReducer";
import { carsReducer } from "./reducers/carsReducer";
import {bookingsReducer} from "./reducers/bookingsReducer"
import {authReducer} from "./reducers/authReducer"
import {serviceReducer} from "./reducers/serviceReducer"
import {buyReducer} from "./reducers/buyReducer"
import { cartReducer } from "./reducers/cartReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  carsReducer,
  alertsReducer,
  authReducer,
  bookingsReducer,
  serviceReducer,
  buyReducer,
  cartReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
