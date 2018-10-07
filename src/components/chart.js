import React from 'react';

var echarts = require('echarts');

export default class BarChart extends React.Component {
    componentDidMount() {
        var themeJSON = require('../resources/echartsThemes/'+ this.props.theme + '.json');

        echarts.registerTheme('theme', themeJSON)

        var chart = echarts.init(document.getElementById('chartContainer'), 'theme');

        var title = "";
        var gridPaddingTop = "2%";
        if (this.props.title != null && this.props.theme != "") {
            title = this.props.title;
            gridPaddingTop = "10%";
        }

        chart.setOption({
            title: {
                text: title,
                align: "center"
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],
            grid: {
                top: gridPaddingTop,
                left: "5%",
                // right: 0,
                // bottom: 0
            }

        });
    }

    render() {
        return (
            <div>
                <div id="chartContainer" style={{ width:26 + 'rem', height: 16 + 'rem' }}></div>
            </div>
        )
    }
}


