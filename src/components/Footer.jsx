import React from 'react'
import './Footer.styles.css'
export default function Footer(props) {
	return (
		<div className='container text-center'>
			<div
				className={
					props.middle ? 'social-icons-middle' : 'social-icons'
				}>
				<div className='circle'>
					<a
						href='https://www.facebook.com/jimmy.prajapati2/'
						style={{ color: '#fff' }}>
						<i class='fab fa-facebook-f'></i>
					</a>{' '}
				</div>
				<div className='circle'>
					<a
						href='https://www.instagram.com/dhrunit_/'
						style={{ color: '#fff' }}>
						<i class='fab fa-instagram'></i>
					</a>{' '}
				</div>
				<div className='circle'>
					<a
						href='https://twitter.com/dhrunit_'
						style={{ color: '#fff' }}>
						<i class='fab fa-twitter'></i>
					</a>{' '}
				</div>
				<div className='circle'>
					<a
						href='https://www.linkedin.com/in/dhrunitprajapati/'
						style={{ color: '#fff' }}>
						<i class='fab fa-linkedin-in'></i>
					</a>
				</div>
			</div>
			<p style={{ marginTop: '-2rem' }}>
				Made with ❤ using{' '}
				<a href='https://reactjs.org/' style={{ color: '#3FB1B5' }}>
					ReactJs
				</a>
			</p>
		</div>
	)
}
