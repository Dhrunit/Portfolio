import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.styles.css'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<Link to='/'>
					Dhrunit <span className='yellow'>Prajapati</span>
				</Link>
			</div>
			<div className='nav-links'>
				<ul>
					<Link to='/skills'>
						<li>Skills</li>
					</Link>
					<Link to='about'>
						<li>About</li>
					</Link>
					<Link to='/work'>
						<li className=''>Work</li>
					</Link>
				</ul>
			</div>
		</nav>
	)
}
