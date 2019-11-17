import {h, useRef, useEffect} from 'dyo';
import cx from 'classnames';
import $ from 'jquery';

export function Modal ({path, show, className, children, onClose, ...rest}) {

  const ref = useRef(null);
  useEffect(() =>
    $(ref.current).modal({show}).on('hide.bs.modal', onClose)
  , show)

  return <div
    {...rest}
    ref={ref}
    role='dialog'
    class={cx('modal fade', className)}
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          {children}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
}

export default Modal;
