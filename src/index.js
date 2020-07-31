import './style/index.css';
import { logName } from './js/log';
import tsLog from 'src/tsLog.ts';

logName();
tsLog('aaa');

document.body.innerHTML = `
  <div>
    <h5>hello world</h5>
  </div>
`;
