import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PostPropsType } from './components/profile/MyPost/Post/Post';
import { DialogItemPropsType } from './components/dialogs/DialogItem';
import { MessagePropsType } from './components/dialogs/Message';
import { MyPostPropsType } from './components/profile/MyPost/MyPost';
import { state } from './redux/state';

ReactDOM.render(
    <App state={state} />,
  document.getElementById('root')
);