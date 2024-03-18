import { ActionsEnumTypes, ActionsType, StateSideBar, StateType } from "./state";
const initialState: StateSideBar  = {
	data: 'firstData'
}
export const sidebarReduser = (state = initialState, action: ActionsType ): StateSideBar => {
	switch (action.type){
		case ActionsEnumTypes.SIDE_BAR: {
			return {...state}
		}
		default: return {...state}
	}
}