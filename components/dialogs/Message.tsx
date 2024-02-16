import classes from './Dialogs.module.css'

export type MessagePropsType = {
	message: string,
	id: number
}

export const Message:React.FC<MessagePropsType> = ({message, id}) => {
	return <div className={classes.message}>{message}</div>
}