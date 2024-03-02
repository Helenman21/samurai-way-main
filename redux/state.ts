
import { DialogItemPropsType } from "../components/dialogs/DialogItem"
import { MessagePropsType } from "../components/dialogs/Message"
import { PostPropsType } from "../components/profile/MyPost/Post/Post"

enum ActionsEnumTypes{
	ADD_POST = "ADD-POST",
	NEW_POST_TEXT = "NEW_POST_TEXT"
}
export type StateDialogsType = {
	dialogsData: DialogItemPropsType[]
	messageData: MessagePropsType[]
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
export type ActionsType = AddPostType | NewPostTextType
export const addPostAC = () => {
	return {
		type: ActionsEnumTypes.ADD_POST
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
			]
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
		}

	},
	subscribe(observer: () => void) {
		this.rerender = observer
	},
	getState(){
		return this._state
	}
}