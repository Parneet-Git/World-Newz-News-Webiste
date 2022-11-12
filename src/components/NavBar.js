import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// export class NavBar extends Component 
const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">World Newz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/general">General</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/technology">Technology</NavLink></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id="search-box" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning" id='search-btn' type='button'>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
