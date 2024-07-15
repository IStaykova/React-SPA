export default function Header(){
    
    return(
        <>
  {/* header section starts */}
  <header className="header_section">
    <div className="header_top">
      <div className="container-fluid ">
        <div className="contact_nav">
          <a href="">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>Call : +01 123455678990</span>
          </a>
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
                <a className="nav-link" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  <i className="fa fa-user" aria-hidden="true" /> Login
                </a>
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
  {/* end header section */}
  {/* slider section */}
  <section className="slider_section ">
    <div className="slider_bg_box">
      <img src="images/slider-bg.jpg" alt="" />
    </div>
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 ">
                <div className="detail-box">
                  <h1>
                    We Provide best <br />
                    Transport Service
                  </h1>
                  <p>
                  INS TRANS is a young but fast-growing company, which, through its headway-focused policy, has successfully ranked amongst the leaders in logistics.
                  With its experienced and multilingual team, INS TRANS will plan, store and deliver your goods anywhere in Europe using first-rate trucks.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 ">
                <div className="detail-box">
                  <h1>
                    We Provide best <br />
                    Transport Service
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum magnam, voluptates distinctio, officia architecto
                    tenetur debitis hic aspernatur libero commodi atque fugit
                    adipisci, blanditiis quidem dolorum odit voluptas?
                    Voluptate, eveniet?
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 ">
                <div className="detail-box">
                  <h1>
                    We Provide best <br />
                    Transport Service
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eum magnam, voluptates distinctio, officia architecto
                    tenetur debitis hic aspernatur libero commodi atque fugit
                    adipisci, blanditiis quidem dolorum odit voluptas?
                    Voluptate, eveniet?
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#customCarousel1"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#customCarousel1" data-slide-to={1} />
        <li data-target="#customCarousel1" data-slide-to={2} />
      </ol>
    </div>
  </section>
  {/* end slider section */}


        </>
    )
}