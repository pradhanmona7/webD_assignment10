import React from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
var moment = require("moment");

class HourlyForecast extends React.Component {

  render() {
    let _date = new Date();
    const weekday = this.props.data.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${this.props.data.weather[0].id} owf-5x`;
    const fahrenheitMax = Math.round(this.props.data.main.temp_max);

    const fahrenheitMin = Math.round(this.props.data.main.temp_min);

    const farenheitTemp = Math.round(this.props.data.main.temp);

    return (
      <div className="row">
        <div className="col-12">
          <div className="card py-2 my-3">
            <div className="row">
              <div className="col" style={{color:'black'}}>
                <h4 className="text-muted" >
                  {moment(_date).format("MM/DD/YY")}
                </h4>
                <hr/>
                <h5>
                  {this.props.data.day} at {moment(_date).format("HH:mm a")}
                </h5>
                <i className={_img} ></i>
                <p>{this.props.data.weather[0].description}</p>
                <h5>Temperature: {farenheitTemp}°F</h5>
                <p>
                  Minimum:{fahrenheitMin}°F and Maximum: {fahrenheitMax}°F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HourlyForecast;
