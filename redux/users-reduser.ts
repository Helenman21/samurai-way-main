export enum ActionsEnumTypes{
	FOLLOW = "FOLLOW",
	UNFOLLOW = "UNFOLLOW",
	SET_USERS = "SET_USERS"
}

type LocationUsersStateType = {
    city: string,
	country: string
}
export type UserStateType = {
	fullName: string,
	followed: boolean,
	status: string,
	id: number,
	photoUrl: string,
	location: LocationUsersStateType
}
export type UsersInitialStateType = {
	users: UserStateType[]
}
const initialState: UsersInitialStateType = {users: [
	{ fullName: 'Dmitriy', photoUrl: 'https://topspiski.com/wp-content/uploads/2019/05/lilo-stich.jpg', followed: true, status: 'status Dmitriy', id: 1, location: {city: 'Minsk', country: 'Belarus'} },
	{ fullName: 'Ivan', photoUrl: 'https://topspiski.com/wp-content/uploads/2019/05/lilo-stich.jpg', followed: false, status: 'status Ivan', id: 2,  location: {city: 'Moscow', country: 'Russia'} },
		{ fullName: 'Victor', photoUrl: 'https://topspiski.com/wp-content/uploads/2019/05/lilo-stich.jpg', followed: true, status: 'status Ivan', id: 3,  location: {city: 'Samara', country: 'Russia'} }
]}
export const usersReduser = (state = initialState, action: ActionsType ): UsersInitialStateType => {
	//debugger
	switch (action.type){
		case ActionsEnumTypes.FOLLOW: {
			return {...state.users, users: state.users.map(user =>
					user.id === action.payload.userId ? {...user, followed: false } : user )}
		}
		case ActionsEnumTypes.UNFOLLOW: {
			return {...state.users, users: state.users.map(user =>
					user.id === action.payload.userId ? {...user, followed: true } : user )}
		}
		case ActionsEnumTypes.SET_USERS:{
			return {...state, users: [ ...state.users, ...action.payload.users]}
		}

		default: return {...state}
	}
}
type FollowType = ReturnType<typeof followAC>
type UnFollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
export type ActionsType = FollowType | UnFollowType | SetUsersType
export const followAC = (userId: number) => {
//debugger
	return{
		type: ActionsEnumTypes.FOLLOW,
		payload: {userId}
	}as const
}
export const unFollowAC = (userId: number) => {
	return{
		type: ActionsEnumTypes.UNFOLLOW,
		payload: {userId}
	}as const
}
export const setUsersAC = (users: UserStateType[]) => {
	return{
		type: ActionsEnumTypes.SET_USERS,
		payload: {users}
	}as const
}