import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
type DialogItemPropsType = {
	name: string
	id: string
}
const DialogItem:React.FC<DialogItemPropsType> = ({name, id}) => {
	const path: string ='/dialogs/' + id
	return (
		<div className={`${classes.dialog} + ' ' ${classes.active}`} >
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}

type MessagePropsType = {
	message: string
}

const Message:React.FC<MessagePropsType> = ({message}) => {
	return <div className={classes.message}>{message}</div>
}

export const Dialogs = () => {
	return (
		<div className={classes.dialogs} >
			<div className={classes.dialogsItem} >

				<DialogItem name='пользователь 1' id='1' />
				<DialogItem name='пользователь 1' id='2' />
				<DialogItem name='пользователь 1' id='3' />
				<DialogItem name='пользователь 1' id='4' />
			</div>
			<div className={classes.messages}>
				<Message message='How'/>
				<Message message='How are you'/>
				<Message message='what is your name'/>
			</div>

		</div>
	)
}