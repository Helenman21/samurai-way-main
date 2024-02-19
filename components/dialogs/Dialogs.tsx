import React from 'react'
import { NavLink } from 'react-router-dom'
import { StateDialogsType } from '../../redux/state'
import { DialogItem, DialogItemPropsType } from './DialogItem'
import classes from './Dialogs.module.css'
import { Message, MessagePropsType } from './Message'

type DialogsPropstype = {
	stateDialogs: StateDialogsType
}

export const Dialogs = ({stateDialogs}: DialogsPropstype) => {

	const arrayDialogs = stateDialogs.dialogsData.map( el =>
		{return <DialogItem name={el.name} id={el.id} />}
	)
	const textareaRef = React.createRef<HTMLTextAreaElement>()
	const addMessage = () => {
		alert(textareaRef.current?.value)
	}
	const arrayMessage = stateDialogs.messageData.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
	return (
		<div className={classes.dialogs} >
			<div className={classes.dialogsItem} >
				{arrayDialogs}
			</div>
			<div className={classes.messages}>
				{arrayMessage}
			</div>
			<textarea  />
			<button onClick={addMessage}/>
		</div>
	)
}