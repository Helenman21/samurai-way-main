import { NavLink } from 'react-router-dom'
import { DialogItem, DialogItemPropsType } from './DialogItem'
import classes from './Dialogs.module.css'
import { Message, MessagePropsType } from './Message'

export const Dialogs = () => {
	const dialogsData: DialogItemPropsType[] = [
		{id: 1, name: 'пользователь 1'},
		{id: 2, name: 'пользователь 2'},
		{id: 3, name: 'пользователь 3'},
		{id: 4, name: 'пользователь 4'},
		{id: 5, name: 'пользователь 5'},
		{id: 6, name: 'пользователь 6'}
	]
	const messageData: MessagePropsType[] = [
		{message: 'How', id: 1},
		{message: 'Howare you', id: 2}
	]
	const arrayDialogs = dialogsData.map( el =>
		{return <DialogItem name={el.name} id={el.id} />}
	)
	const arrayMessage = messageData.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
	return (
		<div className={classes.dialogs} >
			<div className={classes.dialogsItem} >
				{arrayDialogs}
			</div>
			<div className={classes.messages}>
				{arrayMessage}
			</div>

		</div>
	)
}