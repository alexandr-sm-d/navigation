import React from 'react'
import {connect} from "react-redux";
import Line from "react-apexcharts";

const Chart = ({data}) => {
    const config = {
        options: {
            chart: {
                toolbar: {
                    show: true,
                },
            },
            xaxis: {
                type: 'numeric',
                min: -10,
                max: 10,
            },
            yaxis: {
                type: 'numeric',
                min: -10,
                max: 10,
            },
        },

        series: [
            {
                name: 'first Point',
                data: [{
                    x: data.coordinateFirstRadioreciever.x,
                    y: data.coordinateFirstRadioreciever.y,
                }],
            },
            {
                name: 'second Point',
                data: [{
                    x: data.coordinateSecondRadioreciever.x,
                    y: data.coordinateSecondRadioreciever.y,
                }],
            },
            {
                name: 'third Point',
                data: [{
                    x: data.coordinateThirdRadioreceiver.x,
                    y: data.coordinateThirdRadioreceiver.y,
                }],
            },
            {
                name: 'target',
                seriesIndex: 2,
                data: data.distanceList
            }
        ],
    };

    return (
        <Line
            options={config.options}
            series={config.series}
            type="line"
            width="600"
        />
    )
}

const mstp = state => {
    return {
        data: state.data
    }
}

export default connect(mstp, null)(Chart)

