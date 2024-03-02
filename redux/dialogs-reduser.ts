import { ActionsEnumTypes, ActionsType, StateDialogsType, StateType } from "./state";

export const dialogsReduser = (state: StateDialogsType, action: ActionsType): StateDialogsType => {
	switch (action.type) {
		case ActionsEnumTypes.NEW_MESSAGE_TEXT:
			state.newMessageText = action.payload.newText;
			return state;
		case ActionsEnumTypes.ADD_NEW_MESSAGE:
			const newMessage = { message: state.newMessageText, id: state.dialogsData.length + 1 }
			state.messageData.push(newMessage)
			state.newMessageText = '';
			return state

		default: return state 
	}
}

