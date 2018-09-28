import React from 'react';
import ReactDOM from 'react-dom';
import './admin/admin.css';
import App from './admin/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
