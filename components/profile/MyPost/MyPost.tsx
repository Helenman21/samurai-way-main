import { type } from 'os'
import React from 'react'
import classes from  './MyPost.module.css'
import { Post, PostPropsType } from './Post/Post'

export type MyPostPropsType = {
	postsData: PostPropsType[]
}

export const MyPost = ({postsData}: MyPostPropsType) => {
	const postsArray = postsData.map( el => ( <Post  message={el.message} key={el.id} id={el.id} likesCount={el.likesCount} />))
	console.log('postsArray', postsArray)
	const newPostElement = React.createRef<HTMLTextAreaElement>()
	const addPost = () => {
			alert(newPostElement.current?.value)
	}
	return (
		<div className={classes.content}>
			<h3 className={classes.header} >My posts</h3>
			<div>
				<div className={classes.inputBlock} >
					<textarea ref={newPostElement}/>
				</div>
				<div>
					<button onClick={addPost} >Add Post</button>
				</div>
			</div>
			<section>
				{postsArray}
			</section>
	  </div>
	)
}