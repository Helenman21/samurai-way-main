import classes from  './MyPost.module.css'
import { Post } from './Post/Post'

export const MyPost = () => {
	return (
		<div className={classes.content}>
			<h3 className={classes.header} >My posts</h3>
			<div>
				<div className={classes.inputBlock} >
					<input value={"new post"}/>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<section>
				<Post message="Hi, how are you" />
				<Post message="My first post" />
			</section>
	  </div>
	)
}