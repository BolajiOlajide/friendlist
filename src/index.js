import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import App from './App';
import FriendStore from './stores/FriendStore';
import registerServiceWorker from './registerServiceWorker';


const Main = () => (
  <Provider FriendStore={FriendStore}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
