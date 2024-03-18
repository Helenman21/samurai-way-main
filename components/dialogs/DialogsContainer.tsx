import {addNewMessageAC, newMessageTextAC} from '../../redux/state'
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduserType} from "../../redux/redux-store";
import {DialogItemPropsType} from "./DialogItem";
import {MessagePropsType} from "./Message";
import {Dispatch} from "redux"


type DialogStateType = {
	dialogsData: DialogItemPropsType[]
	messageData: MessagePropsType[]
}
type MapStatePropsType = {
	stateDialogs: DialogStateType
	newMessageText: string
}

type MapDispatchToPropsType = {
	addMessage : () => void
	onChangeTextNewMessage: (message: string) => void
}
export type DiaLogsPropsType = 	MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduserType): MapStatePropsType => {
	return {
		stateDialogs: state.stateDialogs,
		newMessageText: state.stateDialogs.newMessageText

	}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
	return {
		addMessage : () => {
			dispatch(addNewMessageAC())
		},
		onChangeTextNewMessage: (message: string) => {
			dispatch(newMessageTextAC(message))
		}
	}
}
export const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)