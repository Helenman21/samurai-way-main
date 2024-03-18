import React from 'react'
import { NavLink } from 'react-router-dom'
import { ActionsType, addNewMessageAC, newMessageTextAC, StateDialogsType } from '../../redux/state'
import { DialogItem, DialogItemPropsType } from './DialogItem'
import classes from './Dialogs.module.css'
import { Message, MessagePropsType } from './Message'
import {DiaLogsPropsType} from "./DialogsContainer";

// type DialogsPropstype = {
// 	stateDialogs: StateDialogsType
// 	newMessageText: string
// 	addMessage: () => void
// 	onChangeTextNewMessage: (message: string) => void
// }

export const Dialogs = ({stateDialogs, addMessage, onChangeTextNewMessage, newMessageText}: DiaLogsPropsType) => {
	const arrayDialogs = stateDialogs.dialogsData.map( el =>
		{return <DialogItem name={el.name} id={el.id} />}
	)
	//const textareaRef = React.createRef<HTMLTextAreaElement>()
	const onAddMessage = () => {
		if(newMessageText.length > 0){
			addMessage()
		}
	}
	const changeTextNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if(e.currentTarget.value.length > 0){
			onChangeTextNewMessage(e.currentTarget.value)
		}		
	}
	const arrayMessage = stateDialogs.messageData.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
	return (
		<div className={classes.dialogs} >
			<div className={classes.dialogsItem} >
				{arrayDialogs}
			</div>
			<div className={classes.messages}>
				{arrayMessage}
				<div>
					<div>
						<textarea value={newMessageText} onChange={changeTextNewMessage}  />
					</div>
					<div>
						<button onClick={onAddMessage}>Send</button>
					</div>
				</div>
			</div>			
		</div>
	)
}