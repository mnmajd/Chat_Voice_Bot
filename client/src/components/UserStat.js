import React, {Component} from "react";
import Chart from 'react-apexcharts'
import axios from "axios";


class UserStat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    stacked: true
                },
                colors: ['#008FFB', '#FF4560'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',

                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        showLines: false
                    }
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },
                title: {
                    text: 'Mauritius population pyramid 2011'
                },
                xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'
                    ],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%"
                        }
                    }
                }
            },
            series: [
                {
                    name: 'Males',
                    data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                        3.9, 3.5, 3
                    ]
                },
                {
                    name: 'Females',
                    data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                        -4.1, -4, -4.1, -3.4, -3.1, -2.8
                    ]
                }
            ],
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
                            <Chart options={this.state.options} series={this.state.series} type="bar" width={350} height={320} />
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default UserStat;