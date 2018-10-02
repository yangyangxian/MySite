import React from 'react';
import BarChart from '../../components/chart.js'

var chartThemes = require('../../resources/echartsThemes/themeList.json')

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {barTheme: chartThemes.macarons};
  }

  render() {
    return (
      <div>
        <BarChart theme={this.state.barTheme}></BarChart>
      </div>
    )
  }
}