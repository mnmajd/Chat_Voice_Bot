import React, {Component} from "react";
import Chart from 'react-apexcharts'
import axios from "axios";


class SalesStat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },

                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },

                title: {
                    text: 'Fiction Books Sales'
                },
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    labels: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1

                },

                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },
            series: [{
                name: 'Marine Sprite',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Striking Calf',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Tank Picture',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Bucket Slope',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Reborn Kid',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
        }
    }

    render() {

        return (

            <React.Fragment>
                <div className="col-md-6 col-lg-6">
                    <div className="card card-chart">
                        <div className="card-header card-header-icon card-header-danger">
                            <div className="card-icon">
                                <i className="material-icons">pie_chart</i>
                            </div>
                            <h4 className="card-title">Statics of users</h4>
                        </div>
                        <div className="card-body">
                            <Chart options={this.state.options} series={this.state.series} type="bar" width={400} height={320} />
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default SalesStat;