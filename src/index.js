import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import './index.scss';
// import './nested_css.scss'

// import App from './components/app';
// import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore({})}/>, rootElement)
})


// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
