import {h} from 'dyo';
import {history} from '../router';

export function Link ({path, children}) {
  return <a class='btn btn-link' onClick={() => {
    history.push(path)
  }}>{children}</a>
}

export default Link;
