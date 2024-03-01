import { StateProfileType } from '../../redux/state'
import { MyPost, MyPostPropsType } from './MyPost/MyPost'
import { PostPropsType } from './MyPost/Post/Post'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type ProfilePropsType = {
	postsData: PostPropsType[]
	addPost: () => void
	newPostText: string
	updateNewPostText: (newText: string) => void
}

export const Profile = ({postsData, addPost, newPostText, updateNewPostText}: ProfilePropsType) => {

	return (
		<div >
			<ProfileInfo/>
			<MyPost postsData={postsData}
					  addPost={addPost} 
					  newPostText={newPostText}
					  updateNewPostText={updateNewPostText} />
	  </div>
	)
}