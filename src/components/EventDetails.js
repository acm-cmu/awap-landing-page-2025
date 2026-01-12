import "../styles/Schedule.css";
import ReactDOMServer from "react-dom/server";
import rover from "../rover.png";
const fridaySchedule = () => {
  return (
    <div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>11:00 AM - 12:00 PM</p>
        </div>
        <div class="col">
          <p>Check-in</p>
          <p class="details">Rashid Auditorium</p>
          <p class="details">Check in with organizers and find team members</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>11:30 AM - 12:30 PM</p>
        </div>
        <div class="col">
          <p>Opening Ceremony</p>
          <p class="details">Rashid Auditorium</p>
          <p class="details">Join us for the opening ceremony of AWAP 2024!</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>5:00 - 6:00 PM</p>
        </div>
        <div class="col">
          <p>Dinner</p>
          <p class="details">Reddy Conference Room</p>
          <p class="details">Enjoy some delicious food to kickstart your coding!</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>12:00 - 1:00 AM</p>
        </div>
        <div class="col">
          <p>Midnight Snack</p>
          <p class="details">Reddy Conference Room</p>
          <p class="details">Insomnia Cookies</p>
        </div>
      </div>
    </div>
  );
};

const saturdaySchedule = () => {
  return (
    <div>
      <div class="schedule-event foods">
        <div class="col">
          <p>9:00 - 10:00 AM</p>
        </div>
        <div class="col">
          <p>Breakfast</p>
          <p class="details">Reddy Conference Room</p>
          <p class="details">Get breakfast after a long night of coding!</p>
        </div>
      </div>
      <div class="schedule-event foods">
        <div class="col">
          <p>12:00 - 1:00 PM</p>
        </div>
        <div class="col">
        <p class="details">Reddy Conference Room</p>
          <p>Lunch</p>
          <p class="details">Stop by for some fuel before your last few submissions!</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>3:00 PM</p>
        </div>
        <div class="col">
          <p>Coding Stops</p>
        </div>
      </div>
      <div class="schedule-event main-event2">
        <div class="col">
          <p>5:00 PM</p>
        </div>
        <div class="col">
          <p>Closing Ceremony</p>
          <p class="details">Rashid Auditorium</p>
          <p class="details">See how your bot plays against other players!</p>
        </div>
      </div>
    </div>
  );
};

function showFriday() {
  document.getElementById("friday").style.border = "3px solid white";
  document.getElementById("saturday").style.border = "0px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(fridaySchedule());
}

function showSaturday() {
  document.getElementById("friday").style.border = "0px solid white";
  document.getElementById("saturday").style.border = "3px solid white";
  document.getElementById("schedule").innerHTML =
    ReactDOMServer.renderToStaticMarkup(saturdaySchedule());
}

const EventDetails = () => {
  return (
    <div className="schedule-page">
      <div className="schedule-content">
        <div className="schedule-header"></div>
        <div className="section-header">Schedule</div>
        <div className="section-paragraph">Have questions? Head over to Rashid.</div>
        <div class="legend">
          <div class="legend-event">
            <div class="legend-box foods"></div>
            <p class="legend-label">Food</p>
          </div>
          <div class="legend-event">
            <div class="legend-box main-event2"></div>
            <p class="legend-label">Main Event</p>
          </div>
          
        </div>
        <div class="schedule-days">
          <button class="year-button" id="friday" onClick={showFriday}>
            <span class="schedule-header-word">SATURDAY 2/15</span>
          </button>
          <button
            class="year-button"
            id="saturday"
            onClick={showSaturday}
          >
            <span class="schedule-header-word">SUNDAY 2/16</span>
          </button>
        </div>
        <div class="schedule" id="schedule">
          {fridaySchedule()}
        </div>
        <div className="container-after"></div>
      </div>
    </div>
  );
};

export default EventDetails;
