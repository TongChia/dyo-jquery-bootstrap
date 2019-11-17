import {h} from 'dyo';
import {history} from '../router';
import {Link} from '../components/Link';

export function Home () {
  return <div>
    Hello!
    <Link path='/page1'>Page1</Link>
  </div>
}

export default Home;
