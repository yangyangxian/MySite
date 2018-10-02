import React from 'react';

var echarts = require('echarts');

export default class BarChart extends React.Component {
    componentDidMount() {
        var themeJSON = require('../resources/echartsThemes/'+ this.props.theme + '.json');

        echarts.registerTheme('theme', themeJSON)

        var chart = echarts.init(document.getElementById('chartContainer'), 'theme');

        chart.setOption({
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="chartContainer" style={{ width:26 + 'rem', height: 18 + 'rem' }}></div>
            </div>
        )
    }
}


