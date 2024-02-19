import { StateProfileType } from '../../redux/state'
import { MyPost, MyPostPropsType } from './MyPost/MyPost'
import { PostPropsType } from './MyPost/Post/Post'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'



export const Profile = ({postsData}: StateProfileType) => {

	return (
		<div >
			<ProfileInfo/>
			<MyPost postsData={postsData}/>
	  </div>
	)
}