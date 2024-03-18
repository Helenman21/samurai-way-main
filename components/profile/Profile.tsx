// import {ActionsType, StateProfileType, StoreType} from '../../redux/state'
// import { MyPost, MyPostPropsType } from './MyPost/MyPost'
// import { PostPropsType } from './MyPost/Post/Post'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import {MyPostContainer} from "./MyPost/MyPostContainer";



export const Profile = () => {

	return (
		<div >
			<ProfileInfo />
			<MyPostContainer  />
	  </div>
	)
}