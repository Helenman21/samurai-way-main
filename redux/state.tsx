import { DialogItemPropsType } from "../components/dialogs/DialogItem"
import { MessagePropsType } from "../components/dialogs/Message"
import { PostPropsType } from "../components/profile/MyPost/Post/Post"

export type StateDialogsType = {
	dialogsData: DialogItemPropsType[]
	messageData: MessagePropsType[]
}
export type StateProfileType = {
	postsData: PostPropsType[]
}
export type StateType = {
	stateDialogs: StateDialogsType
	stateProfile: StateProfileType
}

export const state: StateType = {
	stateDialogs:{
		dialogsData: [
			{id: 1, name: 'пользователь 1'},
			{id: 2, name: 'пользователь 2'},
			{id: 3, name: 'пользователь 3'},
			{id: 4, name: 'пользователь 4'},
			{id: 5, name: 'пользователь 5'},
			{id: 6, name: 'пользователь 6'}
		],
		messageData: [
			{message: 'How', id: 1},
			{message: 'Howare you', id: 2}
		]
	},
	stateProfile: {
		postsData: [
			{message: 'How are you', likesCount: 2, id: 1},
			{message: 'I am fine', likesCount: 2, id: 2}
		]
	}
}
