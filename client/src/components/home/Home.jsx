export default function Home(){

  return (
    <>
      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" className="fit-image" />
        </div>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 ">
                    <div className="detail-box">
                      <h1>
                        We Provide the best Transport Services
                      </h1>
                      <p>
                        INS TRANS is a young but fast-growing company, which, through its headway-focused policy,
                        has successfully ranked amongst the leaders in logistics.
                        With its experienced and multilingual team, INS TRANS will plan,
                        store and deliver your goods anywhere in Europe using first-rate trucks.
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
                        We have remarkable reputation
                      </h1>
                      <p>
                        We won the trust of thousands of partners and customers.
                        INS Trans received extremely high recognition and an average rating
                        of 8.7 out of a maximum of 10 as the level of satisfaction.
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
                        We are technological leader
                      </h1>
                      <p>
                        The company have already started working in this direction, investing in the integration of digital
                        and innovative software solutions of the latest generation. They will help us optimize
                        various key business processes in the organization and provide an increasingly better customer experience.
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