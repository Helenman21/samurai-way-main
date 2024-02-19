import { type } from 'os'
import classes from  './MyPost.module.css'
import { Post, PostPropsType } from './Post/Post'

export type MyPostPropsType = {
	postsData: PostPropsType[]
}

export const MyPost = ({postsData}: MyPostPropsType) => {
	const postsArray = postsData.map( el => ( <Post  message={el.message} key={el.id} id={el.id} likesCount={el.likesCount} />))
	console.log('postsArray', postsArray)
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
				{postsArray}
			</section>
	  </div>
	)
}