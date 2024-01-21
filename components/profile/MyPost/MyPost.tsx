import classes from  './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPost = () => {
	return (
		<div className={classes.content}>
			<header className={classes.header} >My posts</header>
			<div className={classes.inputBlock} >
				<input value={"new post"}/>
			</div>
			<section>
				<Post message="Hi, how are you" />
				<Post message="My first post" />
			</section>
	  </div>
	)
}