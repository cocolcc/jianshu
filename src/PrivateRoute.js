import { Route, Redirect} from 'react-router-dom';
import * as URI from './uri';
import { useSelector } from 'react-redux'

function PrivateRoute(props) {
  const isLogin = useSelector(state => state.getIn(['login', 'isLogin']));
  return isLogin ? (
    <Route path={props.path} component={props.component}/>
  ): (
      <Redirect to={URI.LOGIN}/>
  );
}

export default PrivateRoute;