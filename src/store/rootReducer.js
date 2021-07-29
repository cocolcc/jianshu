import { combineReducers } from "redux-immutable";
import headerReducer from "./header/reducer";
import homeReducer from "./home/reducer";

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default rootReducer;