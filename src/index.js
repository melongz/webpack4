import tsLog from './tsLog.ts';
import './style/index.css';
import { logName } from './js/log';

logName();
tsLog(_);

document.body.innerHTML = `
  <div>
    <h5>hello world</h5>
  </div>
`;
