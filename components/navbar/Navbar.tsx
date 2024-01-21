import classes from './Navbar.module.css'

export const Navbar = () => {
	return (
				<nav className={classes["App-wrapper__nav"]}>
					<div className={`${classes.item} ${classes.active}`} >
						<a  >Profile</a>
					</div>
					<div className={`${classes.item} ${classes.active}`} >
						<a >Messages</a>
					</div>
					<div className={`${classes.item} ${classes.active}`} >
						<a >News</a>
					</div>
					<div className={`${classes.item} ${classes.active}`} >
						<a >Music</a>
					</div>
					<div className={`${classes.item} ${classes.active}`}>
						<a >Settings</a>
					</div>
				</nav>
				)
}
