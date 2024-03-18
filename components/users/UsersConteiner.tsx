import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersInitialStateType, UserStateType} from "../../redux/users-reduser";
import {ReduserType} from "../../redux/redux-store";
import {Users} from "./Users";



export type MapStateToPropsType = {
    users: UsersInitialStateType
}
export type MapDispatchToPropsType = {
    userFollow: (userId: number) => void
    userUnFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
}
export  type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: ReduserType): MapStateToPropsType  => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
    return {
        userFollow: (userId: number) => {
            dispatch(followAC(userId))
        },
        userUnFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserStateType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)