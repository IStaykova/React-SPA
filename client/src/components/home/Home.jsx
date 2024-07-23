export default function Home(){

    return (
        <>
  <section className="slider_section ">
    <div className="slider_bg_box">
    <img src="images/slider-bg.jpg" className="fit-image"/>
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
        </>
    )
}