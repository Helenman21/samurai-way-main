import { MyPost } from './MyPost/MyPost'
import { PostPropsType } from './MyPost/Post/Post'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export const Profile = () => {
	const postsData: PostPropsType[] = [
		{message: 'How are you', likesCount: 2, id: 1},
		{message: 'I am fine', likesCount: 2, id: 2}
	]
	return (
		<div >
			<ProfileInfo/>
			<MyPost postsData={postsData}/>
	  </div>
	)
}