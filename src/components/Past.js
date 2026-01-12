import "../styles/Past.css";
import ReactDOMServer from "react-dom/server";
import rover from "../rover.png";
import awap19 from "../past/awap19-image.png";
import awap21 from "../past/awap21-image.png";
import awap22 from "../past/awap22-image.png";
import awap23 from "../past/awap23-image.png";
const year2023 = () => {
  return (
    <div className="row">
      <div className="row two">
        <div className="past-image">
          <img src={awap23} height="300" alt="sponsors" />
        </div>
      </div>
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Mars Makeover - 2023</div>
          <p style={{textAlign:"center", fontSize:"medium", lineHeight:"1.5rem"}}>
            Mars Makeover was our largest event yet, where teams competed to 
            use their fleet of explorer robots to explore the planet, collect resources 
            from metal deposits using miner robots to then expand their fleet, 
            and terraform land tiles to take over the planet. Players could then 
            transform robots to satisfy their needs as the game progressed to eventually
            terraform more tiles than their opponent by the end of the game. Algorithms 
            had to control the varying metal resources, robot collisions, and costs to transform.
          </p>
        </div>
      </div>
    </div>
  );
};

const year2022 = () => {
  return (
    <div className="row">
      <div className="row two">
        <div className="past-image">
          <img src={awap22} height="300" alt="sponsors" />
        </div>
      </div>
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Wifi Rumble - 2022</div>
          <p style={{textAlign:"center", fontSize:"medium", lineHeight:"1.5rem"}}>
            Returning from COVID, Wifi Rumble was a blast, with teams competing
            head-to-head in a seeding round and subsequent double elimination
            bracket for the top prize. Students acted as internet service
            providers to establish cell towers across the impoverished and
            technologically desolate land of Ohhiyo (a fictional place). Players
            vied for power by building roads and cell towers near high
            populations as quickly as possible. Algorithms had to contend with
            terrain of varying building cost and clever opponents who might
            fence them in.
          </p>
        </div>
      </div>
    </div>
  );
};

const year2021 = () => {
  return (
    <div className="row">
      <div className="row two">
        <div className="past-image">
          <img src={awap21} height="300" alt="sponsors" />
        </div>
      </div>
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Commute Chaos - 2021</div>
          <p style={{textAlign:"center", fontSize:"medium", lineHeight:"1.5rem"}}>
            In 2021, AWAP was hosted virtually due to COVID, with a theme based
            on effective transportation management. Each team operated as a
            Transportation Manager whose role was to design a subway network.
            Given knowledge on the passenger load of different stations, teams
            tackled the optimization problem of constructing routes across
            stations with limited resources in order to minimize travel time for
            a simulated day of commuting.
          </p>
        </div>
      </div>
    </div>
  );
};

const year2019 = () => {
  return (
    <div className="row">
      <div className="row two">
        <div className="past-image">
          <img src={awap19} height="300" alt="sponsors" />
        </div>
      </div>
      <div className="row one">
        <div className="past-description">
          <div className="past-title">Career Fair Mayhem - 2019</div>
          <p style={{textAlign:"center", fontSize:"medium", lineHeight:"1.5rem"}}>
            Our 2019 challenge simulated a real-world problem relevant (and
            possibly traumatic) to many students—navigating the chaos of a
            career fair. In this problem, teams were tasked to navigate a map of
            career fair booths and distribute their resume to the companies who
            can provide the most value to their job search. Teams worked to
            create algorithms which would target booths that would maximize
            their profit without wasting too much of their limited time waiting
            in long lines.
          </p>
        </div>
      </div>
    </div>
  );
};

function show2023() {
  document.getElementById("year2023").style.background = "var(--main-color)";
  document.getElementById("year2022").style.background =
    "var(--secondary-color)";
  document.getElementById("year2021").style.background =
    "var(--secondary-color)";
  document.getElementById("year2019").style.background =
    "var(--secondary-color)";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2023());
}

function show2022() {
  document.getElementById("year2023").style.background =
    "var(--secondary-color)";
  document.getElementById("year2022").style.background = "var(--main-color)";
  document.getElementById("year2021").style.background =
    "var(--secondary-color)";
  document.getElementById("year2019").style.background =
    "var(--secondary-color)";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2022());
}

function show2021() {
  document.getElementById("year2023").style.background =
    "var(--secondary-color)";
  document.getElementById("year2022").style.background =
    "var(--secondary-color)";
  document.getElementById("year2021").style.background = "var(--main-color)";
  document.getElementById("year2019").style.background =
    "var(--secondary-color)";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2021());
}

function show2019() {
  document.getElementById("year2023").style.background =
    "var(--secondary-color)";
  document.getElementById("year2022").style.background =
    "var(--secondary-color)";
  document.getElementById("year2021").style.background =
    "var(--secondary-color)";
  document.getElementById("year2019").style.background = "var(--main-color)";
  document.getElementById("past-info").innerHTML =
    ReactDOMServer.renderToStaticMarkup(year2019());
}

const Past = () => {
  return (
    <div className="past">
      <div className="past-content">
        <div className="section-header">Past Challenges</div>
        <div className="past-buttons">
        <button className="year-button" id="year2023" onClick={show2023}>
            <span className="schedule-header-word">Mars Makeover</span>
          </button>
          <button className="year-button" id="year2022" onClick={show2022}>
            <span className="schedule-header-word">Wifi Rumble</span>
          </button>
          <button className="year-button" id="year2021" onClick={show2021}>
            <span className="schedule-header-word">Commute Chaos</span>
          </button>
          <button className="year-button" id="year2019" onClick={show2019}>
            <span className="schedule-header-word">Career Fair Mayhem</span>
          </button>
        </div>
        <div className="past-info-box" id="past-info">
          {year2023()}
        </div>
        {/* <section>
          <img className="rover" src={rover} alt="" />
          <div className="line">
            <hr />
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Past;
