import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Views from './view';
import * as URI from './uri';
import { basePath } from './utils/getPath';
import PrivateRoute from './PrivateRoute';

const Routers = () => {
  return (
    <Router basename={basePath}>
      <Views.Header />
      <Switch>
        <Route path={URI.HOME} exact component={Views.Home}/>
        <Route path={URI.DETAIL} component={Views.Detail}/>
        <PrivateRoute path={URI.FOLLOWING} component={Views.Following}/>
        <PrivateRoute path={URI.MESSAGE} component={Views.Message}/>
        <Route path={URI.LOGIN} component={Views.Login} />
        <PrivateRoute path={URI.WRITING} component={Views.Writing} />
      </Switch>
    </Router>
  );
}

export default Routers;