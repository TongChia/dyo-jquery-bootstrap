import {h} from 'dyo';
import {history} from '../router';
import cx from 'classnames';

export function Link ({path, className, children, ...rest}) {
  return <a {...rest} class={cx('btn btn-link', className)} onClick={() => {
    history.push(path)
  }}>{children}</a>
}

export default Link;
