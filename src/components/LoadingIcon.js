import React from 'react'
import loading from './Double Ring-1s-200px.gif'

// export default class LoadingIcon extends Component 
const LoadingIcon = () => {

  return (
    <div className='text-center align-middle'>
      <img src={loading} style={{ height: "5rem", width: "5rem" }} alt="loading" />
    </div>
  )
}

export default LoadingIcon