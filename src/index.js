import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);