
import { DialogItemPropsType } from "../components/dialogs/DialogItem"
import { MessagePropsType } from "../components/dialogs/Message"
import { PostPropsType } from "../components/profile/MyPost/Post/Post"

enum ActionsEnumTypes{
	ADD_POST = "ADD-POST",
	NEW_POST_TEXT = "NEW_POST_TEXT",
	NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT",
	ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
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
}

type AddPostType = ReturnType<typeof addPostAC>
type NewPostTextType = ReturnType<typeof newPostTextAC>
type NewMessageTextType = ReturnType<typeof newMessageTextAC>
type addNewMessageType = ReturnType<typeof addNewMessageAC>
export type ActionsType = AddPostType | NewPostTextType | NewMessageTextType | addNewMessageType
export const addPostAC = () => {
	return {
		type: ActionsEnumTypes.ADD_POST
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
				{ message: 'Howare you', id: 2 }
			],
			newMessageText: ''
		},
		stateProfile: {
			postsData: [
				{ message: 'How are you', likesCount: 2, id: 1 },
				{ message: 'I am fine', likesCount: 2, id: 2 }
			],
			newPostText: ''
		}
	},
	rerender() {
		console.log('changed state')
	},
	dispatch(action){
		if(action.type === ActionsEnumTypes.ADD_POST){
			const newpost = {
				message: this._state.stateProfile.newPostText,
				likesCount: 0,
				id: new Date().getTime()
			}
			this._state.stateProfile.postsData.push(newpost)
			this._state.stateProfile.newPostText = ''
			this.rerender()
		}else if(action.type === ActionsEnumTypes.NEW_POST_TEXT){
			this._state.stateProfile.newPostText = action.payload.newText
			this.rerender()
		}else if(action.type === ActionsEnumTypes.NEW_MESSAGE_TEXT){
			this._state.stateDialogs.newMessageText = action.payload.newText
			this.rerender()
		}else if(action.type === ActionsEnumTypes.ADD_NEW_MESSAGE){
			const newMessage = { message: this._state.stateDialogs.newMessageText, id: this._state.stateDialogs.dialogsData.length +1 }
			this._state.stateDialogs.messageData.push(newMessage)
			this._state.stateDialogs.newMessageText = ''
			this.rerender()
		}
	},
	subscribe(observer: () => void) {
		this.rerender = observer
	},
	getState(){
		return this._state
	}
}