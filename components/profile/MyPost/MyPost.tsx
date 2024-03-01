import { type } from 'os'
import React from 'react'
import classes from  './MyPost.module.css'
import { Post, PostPropsType } from './Post/Post'

export type MyPostPropsType = {
	postsData: PostPropsType[]
	addPost: () => void
	newPostText: string
	updateNewPostText: (newText: string) => void
}

export const MyPost = ({postsData, addPost, newPostText, updateNewPostText}: MyPostPropsType) => {
	//debugger
	const postsArray = postsData.map( el => ( <Post  message={el.message} key={el.id} id={el.id} likesCount={el.likesCount} />))
	console.log('postsArray', postsArray)
	const newPostElement = React.createRef<HTMLTextAreaElement>()
	const addNewPost = () => {
		if(newPostText.length > 0){
			console.log('addnewpost')
			addPost()
		}
	}
	const onPostChange = () => {
		if(newPostElement.current){
			updateNewPostText(newPostElement.current.value)
		}
	}
	return (
		<div className={classes.content}>
			<h3 className={classes.header} >My posts</h3>
			<div>
				<div className={classes.inputBlock} >
					<textarea ref={newPostElement} value={newPostText} onChange={onPostChange} />
				</div>
				<div>
					<button onClick={addNewPost} >Add Post</button>
				</div>
			</div>
			<section>
				{postsArray}
			</section>
	  </div>
	)
}