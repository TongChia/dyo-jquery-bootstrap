import {h, useState} from 'dyo';
import Button from '../components/Button';
import Modal from '../components/Modal';

console.log('loaded page1!');

export function Page1 () {

  const [state, setState] = useState({show: false})

  return <div>
    <h1>Page1</h1>
    <Button mode='info' onClick={() => {setState({show: true})}}>modal test</Button>
    <Modal show={state.show} onClose={() => {setState({show: false})}}>
      modal test
    </Modal>
  </div>
}

export default Page1;
