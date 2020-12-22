import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmitChange}) =>{
    return(
        <div>
            <p>{'This Magic Brain will detect faces in your pictures. Give it a try.'}</p>

        <div className={'center'}>
            <div className={'center pa4 br3 shadow-5 center form'}>
            <input className={'f4 pa2 w-70 center'} type={'text'} onChange={onInputChange}/>

            <button className={'myButton w-30 grow f4 link ph3 pv2 dib '} type={'button'}
            onClick={onButtonSubmitChange}>Detect</button>
                </div>
        </div>
            </div>
    )
}

export default ImageLinkForm