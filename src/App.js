import { Fragment } from 'react';
import Routers from './Routers';
import Views from './view';

function App() {
  return (
    <Fragment>
      <Views.Header />
      <Routers />
    </Fragment>
  );
}

export default App;
