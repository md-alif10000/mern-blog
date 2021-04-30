 import React from 'react'
 import {Link} from 'react-router-dom'
 
 export default function Navbar() {
     return (
				<nav className='navbar'>
					<div className='container'>
						<div className='navbar_row'>
							<div className='navbar_left'>
								<Link to='/'>
									<img width="200px" src='/images/logo.jpg' />
								</Link>
							</div>
							<div className='navbar_right'>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/register'>Register</Link>
								</li>
							</div>
						</div>
					</div>
				</nav>
			);
 }
 