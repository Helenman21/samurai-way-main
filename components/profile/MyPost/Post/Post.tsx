import classes from  './Post.module.css'
type PostPropsType = {
	message: string
}
export const Post:React.FC<PostPropsType> = ({message}) => {
	return (
				<article className={classes.post} >{message}</article>
	)
}