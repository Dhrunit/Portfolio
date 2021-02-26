import React from 'react'
import Navbar from '../../components/Navbar'

import './About.styles.css'
export default function About() {
	return (
		<div className='about'>
			<Navbar />
			<div className='section-title'>
				<h1 className='title text-center mt-2'>
					<span className='yellow '>About</span> me
				</h1>
				<div className='container'>
					<div className='row mt-4'>
						<div className='col-md-6 col '>
							<img
								className='gif_about'
								src='https://media.giphy.com/media/8WJw9kAG3wonu/giphy.gif'
								alt='patrick-gif'
							/>
						</div>
						<div className='col-md-6 col'>
							<p className='about__text'>
								Hello there, I am an undergrad student currently
								in 8th semester. I love building web apps using
								the popular MERN Stack (MongoDB, ExpressJs,
								ReactJs, NodeJs). I have fair share of
								experience building web applications using this
								stack (more on skills section).
							</p>
							<p className='about__text'>
								Let me tell you more about myself, I love
								listening songs mostly hip-hop genre, I also
								like to play games and most importantly I love
								to code. Along with coding I love designing as
								well which is why I learned Figma and Adobe
								Illustrator 😁
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
