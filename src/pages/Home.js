import {h} from 'dyo';
import {history} from '../router';
import {Link} from '../components/Link';
import {Button} from '../components/Button';

export function Home () {
  return <div>
    <h1>Hello old friends!</h1>
    <p>"Entities are not to be multiplied without necessity"</p>
    <Button mode='success'>success</Button>
  </div>
}

export default Home;
