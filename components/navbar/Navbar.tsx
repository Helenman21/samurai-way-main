import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

export const Navbar = () => {
	return (
				<nav className={classes["App-wrapper__nav"]}>
					<div className={`${classes.item} ${classes.active}`}>
						<NavLink to='/profile' activeClassName={classes.active} >Profile</NavLink>
					</div>
					<div className={`${classes.item}`}>
						<NavLink to='/dialogs' activeClassName={classes.active} >Messages</NavLink>
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
