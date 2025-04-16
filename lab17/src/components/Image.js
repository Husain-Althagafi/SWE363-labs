import React, {useState} from 'react'


function Image(){
    const [IsImageVisible, SetIsImageVisible] = useState(true)
    const imageUrl = '/ccm-profile/Redirect/s202273620/Downloads/Lab13_202273620/myweb/public/image1.png'
    const toggleImageVisibility = () =>{
        SetIsImageVisible(!prevState)

    }
    return <div>
        {IsImageVisible ? (
            <img
            src = {imageUrl}
            alt = {'visible section'}
            style = {{width: '200px', height:'auto'}}
            />
        ) : (
            <p>No image available</p>
        )}
        <button onClick = {toggleImageVisibility}>
            {IsImageVisible ? 'hide image' : 'show image'}
        </button>
    </div>
}

export default Image

