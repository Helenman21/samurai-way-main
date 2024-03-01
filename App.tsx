import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { DialogItemPropsType } from './components/dialogs/DialogItem';
import { Dialogs } from './components/dialogs/Dialogs';
import { MessagePropsType } from './components/dialogs/Message';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { MyPostPropsType } from './components/profile/MyPost/MyPost';
import { PostPropsType } from './components/profile/MyPost/Post/Post';
import { Profile } from './components/profile/Profile';
import { StateType, updateNewPostText } from './redux/state';

type AppPropsType = {
	state: StateType
	addPost: () => void
}


function App({state, addPost}: AppPropsType) {
  return (
	<BrowserRouter>
		<div className="app-wrapper">
		<Header />
		<Navbar/>	  
		<div className='app-wrapper-content'>
			<Route path={'/dialogs'} render={() => <Dialogs stateDialogs={state.stateDialogs} />}/>
			<Route path={'/profile'} component={() => <Profile postsData={state.stateProfile.postsData}
																			   newPostText={state.stateProfile.newPostText}
																				addPost={addPost}
																				updateNewPostText={updateNewPostText} />} />
		</div>
		</div>
	 </BrowserRouter>
  );
}

export default App;
