import { type } from 'os'
import React from 'react'
import classes from  './MyPost.module.css'
import { Post } from './Post/Post'
import {MyPostPropsType} from "./MyPostContainer";


export const MyPost = ({postsData, addNewPost, onPostChange, newPostText}: MyPostPropsType) => {
	const postsArray = postsData.map( el => ( <Post  message={el.message} key={el.id} id={el.id} likesCount={el.likesCount} />))
	console.log('postsArray', postsArray)
	const newPostElement = React.createRef<HTMLTextAreaElement>()
	const onAddNewPost = () => {
		console.log('addnewpost')
		if(newPostText.length > 0){
			console.log('addnewpost')
			addNewPost()
		}
	}
	const postChange = () => {
		if(newPostElement.current){
			onPostChange(newPostElement.current.value)
		}
	}
	return (
		<div className={classes.content}>
			<h3 className={classes.header} >My posts</h3>
			<div>
				<div className={classes.inputBlock} >
					<textarea ref={newPostElement} value={newPostText} onChange={postChange} />
				</div>
				<div>
					<button onClick={onAddNewPost} >Add Post</button>
				</div>
			</div>
			<section>
				{postsArray}
			</section>
	  </div>
	)
}