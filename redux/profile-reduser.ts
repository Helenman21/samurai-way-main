
import { ActionsEnumTypes, ActionsType, StateProfileType, StateType } from "./state";

export const profileReduser = (state: StateProfileType, action: ActionsType ): StateProfileType => {
	switch (action.type){
		case ActionsEnumTypes.NEW_POST_TEXT:
			state.newPostText = action.payload.newText
			return state;
		case ActionsEnumTypes.ADD_POST:
		const newpost = {
			message: state.newPostText,
			likesCount: 0,
			id: new Date().getTime()
		}
			state.postsData.push(newpost)
			state.newPostText = ''
			return state;		
		default: return {...state}
	}
}