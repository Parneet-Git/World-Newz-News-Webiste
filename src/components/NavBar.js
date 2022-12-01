import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Category from './Category'

// export class NavBar extends Component 
const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">World Newz <i className='bi bi-newspaper'></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
            <div className='bg-radial-grad ms-auto me-auto'>
              <button className="button" id='selected-category' data-bs-toggle="modal" data-bs-target="#exampleModal">
                General News
              </button>
            </div>
            <a href="https://github.com/Parneet-Git/World-Newz-News-Webiste" rel="noopener noreferrer" target="_blank"><code>&lt;/&gt;</code></a>
          </div>
        </div>
      </nav>
      <Category />
    </div>
  )
}

export default NavBar
