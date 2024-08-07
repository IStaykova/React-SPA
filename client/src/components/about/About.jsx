import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function About() {

  const [isShowMore, setIsShowMore] = useState(false);

  const text = `Established in Varna in 1997, INS Trans built a reputation of being
                  a trusted cargo carrier capable of meeting the expectations of its' clients.
                  Our company deals exclusively with transportation and carriage of goods in
                  Bulgaria and all over Europe, as well as in parts of Asia and Africa.
                  Over the years of our successful business INS Trans managed to set itself up
                  as the biggest transport company in terms of transport resources and transported cargos.
                  Today our company is a dynamically growing and developing business undertaking in the
                  transport industry providing complex and precise transportation and logistics operations
                  and continuously striving to enlarge the scope of services it provides.
                  The competent and motivated INS Trans' employees are here to provide for you, our clients,
                  the best quality and professional service, coupled with flexible and individual approach,
                  speed, punctuality and precision in the fulfillment of transportation orders.`

  return (
    <>
      <section className="about_section layout_padding-bottom">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <span>Us</span>
                  </h2>
                </div>
                <p>
                  {isShowMore ? text : text.slice(0, 564)}
                </p>
                <Button variant="info" onClick={() => setIsShowMore(!isShowMore)}>
                  {isShowMore ? 'Show less' : '...Show more'}
                </Button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}