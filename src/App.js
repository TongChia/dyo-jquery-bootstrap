import {h, useState} from 'dyo';
import {router, history} from './router';
import Layout from './components/Layout';
import './main.css';

export function App () {
  const [route, setRoute] = useState(router.resolve(history.location.pathname));
  history.listen((pathname) => setRoute(router.resolve(pathname)));

  return h(Layout, null, route);
}

export default App;
