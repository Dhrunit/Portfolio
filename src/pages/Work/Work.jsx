import React from 'react'
import Navbar from '../../components/Navbar'
import './Work.styles.css'

export default function Work() {
	return (
		<div className='work'>
			<Navbar />
			<h1 className='title text-center mt-2'>
				<span className='red '>Work</span>
			</h1>
			<div className='container text-center '>
				<img
					className='gif'
					src='https://media.giphy.com/media/iHD88spVFkL7mZakwa/giphy.gif'
					alt=''
				/>
			</div>
		</div>
	)
}
