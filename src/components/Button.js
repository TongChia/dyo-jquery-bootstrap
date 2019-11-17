import {h, Context} from 'dyo';
import {history} from '../router';
import cx from 'classnames';

export function Button ({className, children, size, mode = 'default', block, ...rest}) {
  return <button
    {...rest}
    class={cx('btn', `btn-${mode}`, {
      'btn-sm': 'small' === size,
      'btn-lg': 'large' === size,
      'btn-block': block,
    }, className)}
  >{children}</button>
}

export default Button;
