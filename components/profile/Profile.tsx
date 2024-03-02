import { ActionsType, StateProfileType } from '../../redux/state'
import { MyPost, MyPostPropsType } from './MyPost/MyPost'
import { PostPropsType } from './MyPost/Post/Post'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type ProfilePropsType = {
	postsData: PostPropsType[]
	dispatch: (action: ActionsType) => void
	newPostText: string
}

export const Profile = ({postsData, dispatch, newPostText}: ProfilePropsType) => {

	return (
		<div >
			<ProfileInfo />
			<MyPost postsData={postsData}
					  dispatch={dispatch} 
					  newPostText={newPostText}
					   />
	  </div>
	)
}