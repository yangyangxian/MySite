import React from 'react';

var echarts = require('echarts');

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chartId : Math.round(Math.random() * 10000)};
    }

    componentDidMount() {
        var themeJSON = require('../resources/echartsThemes/'+ this.props.theme + '.json');

        echarts.registerTheme('theme', themeJSON)

        var chart = echarts.init(document.getElementById("chartContainer" + this.state.chartId), 'theme');

        var title = "";
        var gridPaddingTop = "2%";
        if (this.props.title != null && this.props.theme != "") {
            title = this.props.title;
            gridPaddingTop = "10%";
        }

        var data = this.props.data;

        var xAxisNames = this.props.xAxisNames;
        var type = this.props.type;

        chart.setOption({
            title: {
                text: title,
                align: "center"
            },
            xAxis: {
                data: xAxisNames
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: type,
                data: data
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
        var chartId = "chartContainer" + this.state.chartId;
        return (
            <div style={this.props.style} className={this.props.className}>
                <div id={chartId} style={{ width:'100%', height: '100%' }}></div>
            </div>
        )
    }
}


