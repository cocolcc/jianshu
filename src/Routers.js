import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Views from './view';
import * as URI from './uri';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path={URI.HOME} exact component={Views.Home}/>
        <Route path={URI.DETAIL} component={Views.Detail}/>
      </Switch>
    </Router>
  );
}

export default Routers;