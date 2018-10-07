import React from 'react';
import BarChart from '../../components/chart.js'

var chartThemes = require('../../resources/echartsThemes/themeList.json')

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {barTheme: chartThemes.walden};
  }

  render() {
    var data = [5, 20, 36, 10, 10, 50];
    var names = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'];
    return (
      <div>
        <BarChart theme={this.state.barTheme} data={data} xAxisNames={names}></BarChart>
      </div>
    )
  }
}