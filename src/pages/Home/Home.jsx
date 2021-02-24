import React from 'react'
import Navbar from '../../components/Navbar'
import hero from '../../images/hero.svg'
import './Home.styles.css'

export default function Home() {
	return (
		<div className='hero'>
			<Navbar />
			<div className='container'>
				<div className='row '>
					<div className='col-md-6 col hero-text'>
						<h1 className='title'>
							<span className='red'>Full Stack</span> Web
							Developer
						</h1>
						<p className='subtitle'>
							I am a full stack web developer who makes web
							applications mostly using the MERN Stack.
						</p>
						<a href='./resume.pdf' className='btn' download>
							Download my resume
							<i
								class='fa fa-download'
								style={{ marginLeft: '0.7rem' }}
								aria-hidden='true'></i>
						</a>
					</div>
					<div className='col-md-6'>
						<img src={hero} alt='heroimage' className='hero-svg' />
					</div>
				</div>
			</div>
		</div>
	)
}
