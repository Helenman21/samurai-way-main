import { sidebarReduser } from './sidebar-reduser';
import { dialogsReduser } from './dialogs-reduser';
import { profileReduser } from './profile-reduser';
import { combineReducers, createStore } from "redux";
import {usersReduser} from "./users-reduser";
const rootReduser = combineReducers({
	stateProfile: profileReduser,
	stateDialogs: dialogsReduser,
	sidebar: sidebarReduser,
	users: usersReduser
})
export type ReduserType = ReturnType <typeof rootReduser>
export const store = createStore(rootReduser)