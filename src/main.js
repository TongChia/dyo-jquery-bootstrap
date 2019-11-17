import App from './App';
import {render} from 'dyo';
import $ from 'jquery';

export default function main () {
  render(App, $('#app').get(0), () => console.log('app start'))
}
