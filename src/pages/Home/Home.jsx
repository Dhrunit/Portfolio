import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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
						<a
							href='https://dhrunit-portfolio.s3.ap-south-1.amazonaws.com/resume.pdf'
							target='_blank'
							className='btn'
							rel='noreferrer'>
							My resume
							<i
								class='far fa-file'
								style={{ marginLeft: '0.7rem' }}
								aria-hidden='true'></i>
						</a>
					</div>
					<div className='col-md-6'>
						<img src={hero} alt='heroimage' className='hero-svg' />
					</div>
				</div>
			</div>
			<Footer middle={false} />
		</div>
	)
}
