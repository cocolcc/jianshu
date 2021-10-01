import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Views from './view';
import * as URI from './uri';
import { basePath } from './utils/getPath';

const Routers = () => {
  return (
    <Router basename={basePath}>
      <Views.Header />
      <Switch>
        <Route path={URI.HOME} exact component={Views.Home}/>
        <Route path={URI.DETAIL} component={Views.Detail}/>
      </Switch>
    </Router>
  );
}

export default Routers;