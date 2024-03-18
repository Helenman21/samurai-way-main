
import { ActionsEnumTypes, ActionsType, StateProfileType } from "./state";
const initialState: StateProfileType = {postsData: [
	{ message: 'How are you', likesCount: 2, id: 1 },
	{ message: 'I am fine', likesCount: 2, id: 2 }
],
newPostText: ''}
export const profileReduser = (state = initialState, action: ActionsType ): StateProfileType => {
	switch (action.type){
		case ActionsEnumTypes.NEW_POST_TEXT:
			//state.newPostText = action.payload.newText
			return {...state, newPostText: action.payload.newText};
		case ActionsEnumTypes.ADD_POST:
		const newPost = {
			message: state.newPostText,
			likesCount: 0,
			id: new Date().getTime()
		}
			//state.postsData.push(newPost)
			//state.newPostText = ''
			return {...state, postsData: [newPost, ...state.postsData], newPostText: ''};
		default: return {...state}
	}
}