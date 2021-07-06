import { combineReducers } from "redux-immutable";
import headerReducer from "./header/reducer";

const rootReducer = combineReducers({
  header: headerReducer
})

export default rootReducer;