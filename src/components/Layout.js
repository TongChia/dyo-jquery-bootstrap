import {h, Fragment} from 'dyo';
import {Link} from './Link';

export function Layout ({children, className}) {
  return <div style={{'padding-top': '50px'}} className={className} >
    <nav class='navbar navbar-inverse navbar-fixed-top'>
      <div class='container'>
        <div class='navbar-header'>
          <a class='navbar-brand' href='#'>
            Dyo-jQuery-Bootstrap
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li><Link path='/page1' >Page1</Link></li>
          <li><Link path='/page2' >Page2</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="http://www.tongchia.me">TongChia.me</a></li>
        </ul>
      </div>
    </nav>
    <main class='container'>
      {children}
    </main>
  </div>
}

export default Layout;
