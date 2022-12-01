import React from 'react'

const ImageButton = (props) => {
  return (
    <div className='img-btn-container'>
        <div className='img-button'>
            <p className='img-button-text'>
                {props.name}
            </p>
        </div>
    </div>
  )
}

export default ImageButton