import React, { Component } from "react";
import { LineChart as Chart } from "react-easy-chart";
import { getBondData } from "../../modules/api";
import { Radio, Select } from "antd";
import "./index.css";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Option } = Select;

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

  onDepthChange = e => this.setState({ depth: e.target.value }, this.getData);
  onTypeChange = value => this.setState({ type: value }, this.getData);

  render() {
    const { data, depth, type } = this.state;
    return (
      <div className="root">
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
        <Select
          className="select"
          defaultValue={type}
          size="small"
          onChange={this.onTypeChange}
        >
          <Option value="yield">Yield</Option>
          <Option value="spread">Spread</Option>
          <Option value="price">Price</Option>
        </Select>
      </div>
    );
  }
}

export default LineChart;
