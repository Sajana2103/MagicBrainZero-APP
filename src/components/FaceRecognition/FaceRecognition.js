import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageURL,faceBox}) => {
    return(
        <div className='center'>
            <div className={'absolute mt2'}>
            <img alt='' id={'inputImage'} src={imageURL} width='500px' height='auto'/>
            <div className={'bounding-box'} style={{top: faceBox.topRow , right: faceBox.rightCol, left: faceBox.leftCol, bottom: faceBox.bottomRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition