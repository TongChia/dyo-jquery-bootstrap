import App from './App';
import {render} from 'dyo';
import $ from 'jquery';
import 'core-js/es6/promise';

export default function main () {
  render(App, $('#app').get(0), () => console.log('app start'))
}
