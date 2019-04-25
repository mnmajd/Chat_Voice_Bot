import React, {Component} from "react";
import Chart from 'react-apexcharts'
import axios from "axios";


class ClaimStat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },

                xaxis: {
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                }
            },
            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
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

export default ClaimStat;