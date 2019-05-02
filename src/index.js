import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*TODO: Register service worker for offline data storage*/

// serviceWorker.register();
serviceWorker.unregister();