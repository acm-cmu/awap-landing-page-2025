import "../styles/Sponsors.css";
import citadel_logo from "../sponsors/citadel-logo.png";
import trade_desk_logo from "../sponsors/tradedesk.png";
import aptiv_logo from "../sponsors/aptiv-logo.png";
import bloomberg_logo from "../sponsors/bloomberg-logo-blue.png";
import hrt_logo from "../sponsors/hrt-logo-clipart.png";
import janestreet_logo from "../sponsors/janestreet-logo.png";
import microsoft_logo from "../sponsors/microsoft-logo2.png";
import meta_logo from "../sponsors/meta-logo.png";
import regression_logo from "../sponsors/regression-logo.png";
import omc_logo from "../sponsors/omc-logo.png";
import sandia_logo from "../sponsors/sandia-logo.png";
import scm_logo from "../sponsors/scm-logo.png";
import sig_logo from "../sponsors/sig-logo.png";
import stripe_logo from "../sponsors/stripe.png";
import ford_logo from "../sponsors/ford.png";
import bnymellon_logo from "../sponsors/bnymellon.jpeg";
import deshaw_logo from "../sponsors/deshaw.png";
import lockheed_logo from "../sponsors/lockheed.png";
import jumptrading_logo from "../sponsors/jump_trading_logo.png"

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="section-header">Sponsors</div>
      <div className="sponsors-content">
        <div className="row" id="plat-sponsors-container">
          {/* <div className="col sponsors-level">Platinum</div> */}
          <div className="coll sponsors sponsors-platinum">
          <a href="https://www.citadel.com">
              <img src={citadel_logo} alt="citadel" />
            </a>
            <a href="https://www.thetradedesk.com">
              <img src={trade_desk_logo} alt="the trade desk" />
            </a>
            <a href="https://www.hudsonrivertrading.com">
              <img src={hrt_logo} alt="hrt" />
            </a>
            {/* <a href="https://www.stripe.com">
              <img src={stripe_logo} alt="stripe" />
            </a> */}
          </div>
        </div>
        <div className="row" id="gold-sponsors-container">
          {/* <div className="col sponsors-level">Gold</div> */}
          <div className="coll sponsors sponsors-gold">
            <a href="https://www.ford.com">
              <img src={ford_logo} alt="ford" />
            </a>
            <a href="https://www.jumptrading.com/">
              <img src={jumptrading_logo} alt="jump trading" />
            </a>
            <a href="https://www.deshaw.com/">
              <img src={deshaw_logo} alt="de shaw" />
            </a>
            <a
              className="rounded-sponsor-img"
              href="https://www.janestreet.com/"
            >
              <img src={janestreet_logo} alt="jane street" />
            </a>
            {/* <a href="https://sig.com/">
              <img src={sig_logo} alt="sig" />
            </a> */}
          </div>
        </div>
        <div className="row" id="silver-sponsors-container">
          {/* <div className="col sponsors-level">Silver</div> */}
          <div className="col sponsors sponsors-silver">
            {/* <a href="https://www.sandia.gov/">
              <img src={sandia_logo} alt="sandia" />
            </a> */}
            
          </div>
        </div>
        <div className="row" id="bronze-sponsors-container">
          {/* <div className="col sponsors-level">Bronze</div> */}
          <div className="col sponsors sponsors-bronze">
            <a href="https://www.scm-lp.com/">
              <img src={scm_logo} alt="scm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
