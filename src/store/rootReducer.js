import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "./header";
import { reducer as homeReducer } from "./home";
import { reducer as detailReducer } from "./detail";

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default rootReducer;