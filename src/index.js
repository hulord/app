import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import App from './index/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();