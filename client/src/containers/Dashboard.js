import React,{useEffect} from 'react'
import toast, { Toaster } from "react-hot-toast";
import {useSelector,useDispatch} from 'react-redux'
import {Halmet} from 'react-helmet'
import { postTypes } from '../store/types';

export default function Dashboard() {
    const {redirect}= useSelector(state => state.post)

    const dispatch = useDispatch()

    useEffect(() => {
		if(redirect){
            dispatch({type:postTypes.REDIRECT_FALSE})

        }
		}, [redirect]);

    return (
        <>
        <Helmet>
            <title>User Dashboard</title>
            <meta name="description" content="Its your dashboard" />
        </Helmet>
        <div>
            <Toaster/>
            Dashboard
        </div>
        </>
    )
}
