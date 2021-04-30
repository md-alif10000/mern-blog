 import React from 'react'
 import {useSelector} from 'react-redux'
 import {Link} from 'react-router-dom'
 
 export default function Navbar() {
	 const {user}= useSelector(state => state.auth)
     return (
				<nav className='navbar'>
					<div className='container'>
						<div className='navbar_row'>
							<div className='navbar_left'>
								<Link to='/'>
									<img width='200px' src='/images/logo.jpg' />
								</Link>
							</div>
							{user ? (
								<div className='navbar_right'>
									<li>
										<Link to='/dashboard'>{user.name}</Link>
									</li>
									<li>
										<Link to='/logout'>Logout</Link>
									</li>
								</div>
							) : (
								<div className='navbar_right'>
									<li>
										<Link to='/login'>Login</Link>
									</li>
									<li>
										<Link to='/register'>Register</Link>
									</li>
								</div>
							)}
						</div>
					</div>
				</nav>
			);
 }
 