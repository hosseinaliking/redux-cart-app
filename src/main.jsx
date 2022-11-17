import { createRoot } from 'react-dom/client';

//* Redux *// 
import { Provider } from 'react-redux'
import store from './store/store';

//* Components *// 
import App from './App';

//* Styles *// 
import './global.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);