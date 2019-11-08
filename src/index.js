import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import './index.scss';
// import './nested_css.scss'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore({})}/>, rootElement)
})
