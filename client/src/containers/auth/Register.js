import React from 'react'
import BgImage from './BgImage'
import { Helmet } from "react-helmet";

export default function Register() {
    return (
			<>
			<Helmet>
				<title>Register here</title>
				<meta name="description" content="Login here & start earning..." />

			</Helmet>
				<div className='row mt-80'>
					<div className='col-8'>
						<BgImage />
					</div>
					<div className='col-4'>
						<div className='account'>
							<div className='account_section'>
								<form>
                                    <div className='group'>
                                        <h3 className="form-heading">Register</h3>
                                    </div>
									<div className='group'>
										<input
											type='text'
											className='group_control'
											placeholder='Enter Your Name'
										/>
									</div>
									<div className='group'>
										<input
											type='email'
											className='group_control'
											placeholder='Enter Your Email'
										/>
									</div>
									<div className='group'>
										<input
											type='password'
											className='group_control'
											placeholder='Enter Password'
										/>
									</div>
									<div className='group'>
										<input
											type='password'
											className='group_control'
											placeholder='Confirm Password'
										/>
									</div>
									<div className='group'>
										<input
											type='submit'
										className="btn btn-default btn-block"
                                        value="Register"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}
