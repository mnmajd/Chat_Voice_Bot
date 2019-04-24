import React, {Component} from "react";
import Chart from 'react-apexcharts'


class ServicesStat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },


                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
                        "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
                        "2018-09-19T06:30:00"
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
        }
    }




    render() {

        return (

            <React.Fragment>
                <div className="col-md-6">
                    <div className="card card-chart">
                        <div className="card-header card-header-icon card-header-danger">
                            <div className="card-icon">
                                <i className="material-icons">pie_chart</i>
                            </div>
                            <h4 className="card-title">Statics of users</h4>
                        </div>
                        <div className="card-body">
                            <Chart options={this.state.options} series={this.state.series} type="area" width={350} height={320} />
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default ServicesStat;