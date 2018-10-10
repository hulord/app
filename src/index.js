// import React from 'react';
// import ReactDOM from 'react-dom';
// import dva from 'dva';
// import './index/index.css';
// import App from './index/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import dva from 'dva';
import './index/index.less'; 
import createHistory from 'history/createBrowserHistory'
 
// 1. Initialize
const app = dva({
    history:createHistory()
});
 
// 2. Plugins
// app.use({});
 
// 3. Model
app.model(require('./utils/model').default);
 
// 4. Router
app.router(require('./utils/router').default);
 
// 5. Start
app.start('#root');
 

