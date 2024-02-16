import { NavLink } from "react-router-dom"
import classes from './Dialogs.module.css'
export type DialogItemPropsType = {
	name: string
	id: number
}
export const DialogItem:React.FC<DialogItemPropsType> = ({name, id}) => {
	const path: string ='/dialogs/' + id
	return (
		<div className={`${classes.dialog} + ' ' ${classes.active}`} >
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}