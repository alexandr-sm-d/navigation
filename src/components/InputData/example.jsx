import React, {Component} from "react";
import Line from "react-apexcharts";

// class Example extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             options: {
//                 xaxis: {
//                     type: 'numeric'
//                 }
//             },
//             series: [
//                 {
//                     name: 'first Point',
//                     data: [{
//                         x: props.data.coordinateFirstRadioreciever.x,
//                         y: props.data.coordinateFirstRadioreciever.y,
//                     }],
//                 },
//                 // {
//                 //     name: 'second Point',
//                 //     data: [{
//                 //         x: props.data.coordinateSecondRadioreciever.x,
//                 //         y: props.data.coordinateSecondRadioreciever.y,
//                 //     }],
//                 // },
//                 // {
//                 //     name: 'third Point',
//                 //     data: [{
//                 //         x: props.data.coordinateThirdRadioreceiver.x,
//                 //         y: props.data.coordinateThirdRadioreceiver.y,
//                 //     }],
//                 // }
//             ],
//         };
//     }
//
//     render() {
//         console.log(this.props)
//         console.log("EXAMPLE RERENDER!")
//         console.log(this.state.series)
//         return (
//             <Line
//                 options={this.state.options}
//                 series={this.state.series}
//                 type="line"
//                 width="500"
//             />
//         )
//     }
// }

export const Example2 = ({data}) => {

    const config = {
        options: {
            chart: {
                toolbar: {
                    show: true,
                },
            },
            xaxis: {
                type: 'numeric'
            }
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
                data: data.distanceList
            }
        ],
    };


    return (
        <Line
            options={config.options}
            series={config.series}
            type="line"
            width="500"
        />
    )
}


// export default Example;