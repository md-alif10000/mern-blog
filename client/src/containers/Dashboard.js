import React,{useEffect} from 'react'
import toast, { Toaster } from "react-hot-toast";
import {useSelector,useDispatch} from 'react-redux'
import {Helmet} from 'react-helmet'
import { postTypes } from '../store/types';
import { getUserPosts } from '../store/actions/postAction';
import { Link } from 'react-router-dom';
import { BsPencilSquare, BsArchive } from "react-icons/bs";
;

export default function Dashboard() {
    const {redirect,posts,loading}= useSelector(state => state.post)

    const dispatch = useDispatch()

    useEffect(() => {
		if(redirect){
            dispatch({type:postTypes.REDIRECT_FALSE})

        }
		}, [redirect]);

    useEffect(() => {
			dispatch(getUserPosts());
		}, []);

    return (
			<>
				<Helmet>
					<title>User Dashboard</title>
					<meta name='description' content='Its your dashboard' />
				</Helmet>
				<div>
					<Toaster
						position='top-right'
						reverseOrder={false}
						toastOptions={{
							className: "",
							style: {
								border: "1px solid #713200",
								padding: "10px",
								color: "#713200",
								fontSize: "1.5rem",
							},
						}}
					/>
					Dashboard
				</div>
				<div className='container mt-100'>
					<div className='row'>
						<div className='col-3'>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn't anything embarrassing
							hidden in the middle of text. All the Lorem Ipsum generators on
							the Internet tend to repeat predefined chunks as necessary, making
							this the first true generator on the Internet. It uses a
							dictionary of over 200 Latin words, combined with a handful of
							model sentence structures, to generate Lorem Ipsum which looks
							reasonable. The generated Lorem Ipsum is therefore always free
							from repetition, injected humour, or non-characteristic words etc.
						</div>

						<div className='col-9'>
							{loading
								? "loading.."
								: postMessage.length > 0
								? posts.map((post, index) => (
										<div className='dashboard_post' key={index}>
											<div className='dashboard_post_title'>
												<Link to={`/${post.slug}`}>{post.title}</Link>
											</div>
											<div className='icons'>
												<Link to='/'>
													<BsPencilSquare className='icon' />
												</Link>
												<Link>
													<BsArchive className='icon' />
												</Link>
											</div>
										</div>
								  ))
								: "You dont have any post yet"}
						</div>
					</div>
				</div>
			</>
		);
}
