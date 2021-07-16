import Header from './view/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>Home</Route>
        <Route path='/detail'>Detail</Route>
      </Switch>
    </Router>
  );
}

export default App;
