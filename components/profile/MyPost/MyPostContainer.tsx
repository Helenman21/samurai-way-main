import React from 'react'
import { addPostAC, newPostTextAC} from '../../../redux/state'
import { PostPropsType } from './Post/Post'
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduserType} from "../../../redux/redux-store";


export type MapStateToPropsType = {
	postsData: PostPropsType[]
	newPostText: string
}
export type MapDispatchToPropsType = {
	addNewPost:  () => void
	onPostChange: (newPostElement: string) => void
}
export  type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: ReduserType): MapStateToPropsType  => {
	return {
		postsData: state.stateProfile.postsData,
		newPostText: state.stateProfile.newPostText
	}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType =>{
	return {
		addNewPost: () => {
			console.log('addNewPost before dispatch')
			dispatch(addPostAC())
		},
		onPostChange: (newPostElement: string) => {
			dispatch(newPostTextAC(newPostElement))
		}
	}
}
export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)