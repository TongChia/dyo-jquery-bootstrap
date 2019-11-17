import {h, useState} from 'dyo';
import {router, history} from './router';

export function App () {
  const [route, setRoute] = useState(router.resolve('/'));
  history.listen((pathname) => setRoute(router.resolve(pathname)));

  return h('main', {}, route);
}

export default App;
