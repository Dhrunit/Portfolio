import React from 'react'
import Navbar from '../../components/Navbar'

import './Skills.styles.css'
export default function Skills() {
	return (
		<div>
			<Navbar />
			<h1 className='title text-center mt-2'>
				<span className='yellow '>Skills</span>
			</h1>
			<div className='container text-center '>
				<p className='mt-3'>
					I try to make production ready web applications using the
					technologies mentioned below. I learned all of them by
					myself which is why I call myself a self-taught web
					developer 😄.
				</p>
				<div className='red-container'>
					<div className='white__circle'>
						<img
							className='html'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
							alt=''
						/>
						<p>HTML 5</p>
					</div>
					<div className='white__circle'>
						<img
							className='css'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
							alt=''
						/>
						<p>CSS 3</p>
					</div>
					<div className='white__circle'>
						<img
							className='bootstrap'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
							alt=''
						/>
						<p>Bootstrap</p>
					</div>
					<div className='white__circle'>
						<img
							className='js'
							src='https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png'
							alt=''
						/>
						<p style={{ marginTop: '-3.8rem' }}>JavaScript</p>
					</div>
					<div className='white__circle'>
						<img
							className='react'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
							alt=''
						/>
						<p>React Js</p>
					</div>
					<div className='white__circle'>
						<img
							className='express'
							src='https://expressjs.com/images/express-facebook-share.png'
							alt=''
						/>
						<p>Express Js</p>
					</div>
					<div className='white__circle'>
						<img
							className='mongo'
							src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775'
							alt=''
						/>
						<p>MongoDB</p>
					</div>
					<div className='white__circle'>
						<img
							className='node'
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
							alt=''
						/>
						<p>NodeJs</p>
					</div>
					<div className='white__circle'>
						<img
							className='aws'
							src='https://mk0futurumreseabr7pm.kinstacdn.com/wp-content/uploads/2020/01/aws-logo.png'
							alt=''
						/>
						<p>AWS</p>
					</div>
				</div>
			</div>
		</div>
	)
}
