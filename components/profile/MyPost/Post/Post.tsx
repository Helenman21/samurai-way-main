import classes from  './Post.module.css'
export type PostPropsType = {
	message: string
	likesCount: number
	id: number
}
export const Post:React.FC<PostPropsType> = ({message, likesCount, id}) => {
	return (
				<article className={classes.post} >{message}<span>{likesCount}</span></article>
	)
}