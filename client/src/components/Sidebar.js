import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
			<div className='sidebar'>
                <h3>Settings</h3>
				<div className='sidebar_element'>
					<Link to='/'>Change Password</Link>
					<Link to='/'>Change Name</Link>
					<Link to='/'>Change Password</Link>
					<Link to='/'>Change Password</Link>
					<Link to='/'>Change Password</Link>
                     
				</div>
			</div>
		);
}
