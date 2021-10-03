import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "./header";
import { reducer as homeReducer } from "./home";
import { reducer as detailReducer } from "./detail";
import { reducer as loginReducer } from "./login";
import { reducer as writingReducer } from "./writing";
import { reducer as followingReducer } from "./following";

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  writing: writingReducer,
  following: followingReducer
})

export default rootReducer;