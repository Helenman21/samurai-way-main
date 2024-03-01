import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, StoreType } from './redux/state';



export const rerenderEntrieTree = () => {
	ReactDOM.render(
    <App store={store} />,
  document.getElementById('root')
);
}
rerenderEntrieTree()

store.subscribe(rerenderEntrieTree)
