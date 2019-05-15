import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './devServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*TODO: Register service worker for offline data storage*/

// serviceWorker.register();
serviceWorker.unregister();