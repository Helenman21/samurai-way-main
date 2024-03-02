import React from 'react'
import { NavLink } from 'react-router-dom'
import { ActionsType, addNewMessageAC, newMessageTextAC, StateDialogsType } from '../../redux/state'
import { DialogItem, DialogItemPropsType } from './DialogItem'
import classes from './Dialogs.module.css'
import { Message, MessagePropsType } from './Message'

type DialogsPropstype = {
	stateDialogs: StateDialogsType
	newMessageText: string
	dispatch: (action: ActionsType) => void
}

export const Dialogs = ({stateDialogs, dispatch, newMessageText}: DialogsPropstype) => {

	const arrayDialogs = stateDialogs.dialogsData.map( el =>
		{return <DialogItem name={el.name} id={el.id} />}
	)
	const textareaRef = React.createRef<HTMLTextAreaElement>()
	const addMessage = () => {
		if(newMessageText.length > 0){
			dispatch(addNewMessageAC())
		}
	}
	const onChangeTextNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if(e.currentTarget.value.length > 0){
			dispatch(newMessageTextAC(e.currentTarget.value))
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
						<textarea value={newMessageText} onChange={onChangeTextNewMessage}  />
					</div>
					<div>
						<button onClick={addMessage}>Send</button>
					</div>
				</div>
			</div>			
		</div>
	)
}