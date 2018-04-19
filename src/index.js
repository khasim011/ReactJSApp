import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Master from './components/master/Master';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();
