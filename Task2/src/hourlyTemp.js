import React from "react";  
import HourlyCityForecast from "./hourlyForecast";

class Hourly extends React.Component {
  completeData = this.props.location.state;
  _selectedParam = this.props.match.params;

  state = {
    _data: [],
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{color:'Black'}}>
        <h4 className="py-3">
          {" "}
          Weather Forecast For {this.completeData.cityName} On {this._selectedParam.day} 
        </h4>
        <div className="justify-content-center m-2">
          {this.displayHourlyData()}
        </div>
      </div>
    );
  }

  componentDidMount() {
    const tempData = this.completeData.completeData.filter(
      (cd) => cd.day == this._selectedParam.day
    );
    this.setState({
      _data: tempData,
    });
  }

  displayHourlyData = () => {
    return this.state._data.map((value, index) => (
      <HourlyCityForecast data={value} key={index} />
    ));
  };
}

export default Hourly;
