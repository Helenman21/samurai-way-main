import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import {DialogsConteiner} from "./components/dialogs/DialogsContainer";
import {Users} from "./components/users/Users";
import {UsersContainer} from "./components/users/UsersConteiner";

//type AppPropsType = {

//}


function App() {
  return (
	<BrowserRouter>
		<div className="app-wrapper">
		<Header />
		<Navbar/>	  
		<div className='app-wrapper-content'>
			<Route path={'/dialogs'} render={() => <DialogsConteiner  />}/>
			<Route path={'/profile'} component={() => <Profile />} />
			<Route path={'/users'} component={() => <UsersContainer />} />
		</div>
		</div>
	 </BrowserRouter>
  );
}

export default App;
