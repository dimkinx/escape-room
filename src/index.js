import React, { StrictMode } from 'react';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import App from 'components/app/app';
import { ToastContainer } from 'react-toastify';
import { ToastParam } from './constants';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      theme={ToastParam.Theme}
      position={ToastParam.Position}
    />
  </StrictMode>,
  document.getElementById('root'),
);
