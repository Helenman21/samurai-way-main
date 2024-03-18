import { ActionsEnumTypes, ActionsType, StateDialogsType, StateType } from "./state";
import {DialogItemPropsType} from "../components/dialogs/DialogItem";
import {MessagePropsType} from "../components/dialogs/Message";
import exp from "constants";
const initialState = {
	dialogsData: [
		{ id: 1, name: 'пользователь 1' },
		{ id: 2, name: 'пользователь 2' },
		{ id: 3, name: 'пользователь 3' },
		{ id: 4, name: 'пользователь 4' },
		{ id: 5, name: 'пользователь 5' },
		{ id: 6, name: 'пользователь 6' }
	] as Array<DialogItemPropsType>,
	messageData: [
		{ message: 'How', id: 1 },
		{ message: 'How are you', id: 2 }
	] as Array<MessagePropsType>,
	newMessageText: ''
}
export type InitialStateDialogsType = typeof  initialState
export const dialogsReduser = (state: InitialStateDialogsType = initialState, action: ActionsType): InitialStateDialogsType => {
	switch (action.type) {
		case ActionsEnumTypes.NEW_MESSAGE_TEXT:
			//state.newMessageText = action.payload.newText;
			return {...state, newMessageText: action.payload.newText};
		case ActionsEnumTypes.ADD_NEW_MESSAGE:
			const newMessage = { message: state.newMessageText, id: state.dialogsData.length + 1 }
			//state.messageData.push(newMessage)
			//state.newMessageText = '';
			return {...state, messageData: [newMessage, ...state.messageData], newMessageText: ''}

		default: return state 
	}
}

