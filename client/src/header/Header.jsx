import { Link } from "react-router-dom";

export default function Header(){
    
    return(
        <>
  <header className="header_section">
    <div className="header_top">
      <div className="container-fluid ">
        <div className="contact_nav">
          <Link to="">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>Call : +01 123455678990</span>
          </Link>
          <a href="">
            <i className="fa fa-envelope" aria-hidden="true" />
            <span>Email : ins_trans@gmail.com</span>
          </a>
          <a href="">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>Location</span>
          </a>
        </div>
      </div>
    </div>
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>INS TRANS</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link className="nav-link" 
                   to="/">
                  Home 
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" 
                   to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" 
                   to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" 
                   to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" 
                   to="/register">
                  {" "}
                  <i className="fa fa-user"/>
                  Register
                </Link>
              </li>
              <form className="form-inline">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
        </>
    )
}