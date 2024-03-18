import { dialogsReduser } from './dialogs-reduser';

import { DialogItemPropsType } from "../components/dialogs/DialogItem"
import { MessagePropsType } from "../components/dialogs/Message"
import { PostPropsType } from "../components/profile/MyPost/Post/Post"
import { profileReduser } from './profile-reduser';
import {sidebarReduser} from "./sidebar-reduser";

export enum ActionsEnumTypes{
	ADD_POST = "ADD-POST",
	NEW_POST_TEXT = "NEW_POST_TEXT",
	NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT",
	ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
	SIDE_BAR = "SIDE_BAR",
}
export type StateDialogsType = {
	dialogsData: DialogItemPropsType[]
	messageData: MessagePropsType[]
	newMessageText: string
}
export type StateProfileType = {
	postsData: PostPropsType[]
	newPostText: string
}
export type StateType = {
	stateDialogs: StateDialogsType
	stateProfile: StateProfileType
	sideBar: StateSideBar
}

export type StateSideBar = {
	data: string
}

type AddPostType = ReturnType<typeof addPostAC>
type NewPostTextType = ReturnType<typeof newPostTextAC>
type NewMessageTextType = ReturnType<typeof newMessageTextAC>
type AddNewMessageType = ReturnType<typeof addNewMessageAC>
type SideBarType = ReturnType<typeof sideBarAC>
export type ActionsType = AddPostType | NewPostTextType | NewMessageTextType | AddNewMessageType | SideBarType
export const addPostAC = () => {
	return {
		type: ActionsEnumTypes.ADD_POST
	}as const
}
export const sideBarAC = () => {
	return {
		type: ActionsEnumTypes.SIDE_BAR
	}as const
}
export const addNewMessageAC = () => {
	return {
		type: ActionsEnumTypes.ADD_NEW_MESSAGE
	}as const
}
export const newPostTextAC = (newText: string) => {
	return {
		type: ActionsEnumTypes.NEW_POST_TEXT,
		payload: {
			newText
		}
	}as const
}

export const newMessageTextAC = (newText: string) => {
	return {
		type: ActionsEnumTypes.NEW_MESSAGE_TEXT,
		payload: {
			newText
		}
	}as const
}

export type StoreType = {
	_state: StateType
	dispatch: (action: ActionsType) => void
	rerender: () => void
	subscribe: (observer: () => void) => void
	getState: () => StateType
}
export const store: StoreType = {
	_state: {
		stateDialogs: {
			dialogsData: [
				{ id: 1, name: 'пользователь 1' },
				{ id: 2, name: 'пользователь 2' },
				{ id: 3, name: 'пользователь 3' },
				{ id: 4, name: 'пользователь 4' },
				{ id: 5, name: 'пользователь 5' },
				{ id: 6, name: 'пользователь 6' }
			],
			messageData: [
				{ message: 'How', id: 1 },
				{ message: 'How are you', id: 2 }
			],
			newMessageText: ''
		},
		stateProfile: {
			postsData: [
				{ message: 'How are you', likesCount: 2, id: 1 },
				{ message: 'I am fine', likesCount: 2, id: 2 }
			],
			newPostText: ''
		},
		sideBar: {
			data: 'never'
		}
	},
	rerender() {
		console.log('changed state')
	},
	dispatch(action){
		this._state.stateDialogs = dialogsReduser(this._state.stateDialogs, action)
		this._state.stateProfile = profileReduser(this._state.stateProfile, action)
		this._state.sideBar = sidebarReduser(this._state.sideBar, action)
		this.rerender()
	},
	subscribe(observer: () => void) {
		this.rerender = observer
	},
	getState(){
		return this._state
	}
}