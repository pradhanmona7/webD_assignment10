import React from "react";
import { Link } from "react-router-dom";
import {
  withRouter,
} from "react-router-dom";

var moment = require("moment");

class WeatherData extends React.Component {

  render() {
    let _date = new Date();
    const weekday = this.props.reading.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${this.props.reading.weather[0].id} owf-5x`;
    const fahrenheitMax = this.props.reading.main.temp_max;
    const fahrenheitMin = this.props.reading.main.temp_min;
    const farenheitTemp = this.props.reading.main.temp;

    return (
      <div className="row">
        <div className="col-12">
          <Link
            to={{
              pathname: `/hourlyForecast/${this.props.reading.day}`,
              state: {
                completeData: this.props.completeData,
                cityName: this.props.cityName,
              },
            }}
          >
            <div className="card py-2 mt-3">
              <div className="row">
                <div className="col" >
                  <h4 className="text-secondary">
                    {moment(_date).format("MM/DD/YY")}
                  </h4>
                  <hr/>
                  <h5>{this.props.reading.day}</h5>
                  <i className={_img}></i>
                  <p>{this.props.reading.weather[0].description}</p>
                  <h5>Temperature: {farenheitTemp}°F</h5>
                  <br/>
                  <p>
                    Min Temperature: {fahrenheitMin}°F 
                  </p>
                  <p>
                     Max Temperature: {fahrenheitMax}°F
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherData);
