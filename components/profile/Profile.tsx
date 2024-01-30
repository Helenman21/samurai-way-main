import { MyPost } from './MyPost/MyPost'
//import './Profile.css'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export const Profile = () => {
	return (
		<div >
			<ProfileInfo/>
			<MyPost/>
	  </div>
	)
}