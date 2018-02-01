import React, { Component } from "react";
import { LineChart as Chart } from "react-easy-chart";
import { getBondData } from "../../modules/api";
import { Radio } from "antd";
import "./index.css";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "price",
      depth: "month",
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { depth, type } = this.state;
    const { bondId, date } = this.props;
    const data = getBondData(bondId, date, depth, type);
    this.setState({ data });
  };

  onDepthChange = e => {
    this.setState({ depth: e.target.value }, this.getData());
  };

  render() {
    const { data, depth, type } = this.state;
    return (
      <div>
        <RadioGroup
          className="radio"
          onChange={this.onDepthChange}
          defaultValue={depth}
        >
          <RadioButton value="week">Week</RadioButton>
          <RadioButton value="month">Month</RadioButton>
          <RadioButton value="quarter">Quarter</RadioButton>
          <RadioButton value="year">Year</RadioButton>
          <RadioButton value="max">Max</RadioButton>
        </RadioGroup>
        <Chart
          xType={"text"}
          axes
          grid
          dataPoints
          verticalGrid
          width={750}
          height={250}
          data={[data]}
        />
      </div>
    );
  }
}

export default LineChart;
