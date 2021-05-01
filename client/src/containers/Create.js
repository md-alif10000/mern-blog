import React,{useState} from "react";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css";

export default function Create() {
    const [state, setstate] = useState({
        title:'',
        
    })
    const [currentImage, setCurrentImage] = useState('Choose Image')
    const [value, setValue] = useState('')

 const handleInputs=(e)=>{
     setstate({
         ...state,
         [e.target.name]:e.target.value
     })
     console.log(state)

 }
const fileHandle=(e)=>{
  
    setCurrentImage(e.target.files[0].name)


}
	return (
		<div className='mt-100'>
			<Helmet>
				<title>Create new post</title>
				<meta name='description' content='Create new post' />
			</Helmet>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='card'>
							<h3 className='card_h3'>Create a new post</h3>
							<form>
								<div className='group'>
									<label htmlFor='title'>Post title</label>
									<input
										className='group_control'
										type='text'
										placeholder='Post title...'
										name='title'
										id='title'
                                        onChange={handleInputs}
									/>
								</div>
								<div className='group'>
									<label htmlFor='image' className='image_label'>
										{currentImage}
									</label>
									<input
										className='group_control'
										type='file'
										placeholder='Post title...'
										name='picture'
										id='image'
										onChange={fileHandle}
									/>
								</div>
								<div className='group'>
									<label htmlFor='body'>
                                        Write your blog....
										<ReactQuill
                                        style={{padding:'10px 0px'}}
                                        placeholder='write your post body....'
											value={value}
											onChange={(e) => console.log(e)}
										/>
                                    
									</label>
								</div>
                                <div className="group">
                                    <input type="submit" className="btn btn-default btn-block" value="Create Post"/>
                                </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
