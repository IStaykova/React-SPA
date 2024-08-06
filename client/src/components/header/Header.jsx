import { Link } from "react-router-dom";
import { useAuthContext} from "../../contexts/AuthContext";

export default function Header(){
  const { isAuthenticated } = useAuthContext();
    
  return (
    <>
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="">
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
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home<span className="sr-only"></span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transports">Our transport</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  {isAuthenticated
                    ? (
                      <>
                      <li className="nav-item">
                      <Link className="nav-link" to="/shipment">Shipment</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/logout"><i className="fa fa-user" />Logout</Link>
                      </li>
                      </> 
                    )
                    :
                    (<>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login"><i className="fa fa-user" />Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register"><i className="fa fa-user" />Register</Link>
                      </li>
                    </>)
                  }
                  <form className="form-inline">
                    {/* <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button> */}
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