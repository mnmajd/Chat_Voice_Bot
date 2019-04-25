import React, {Component} from "react";
import Chart from 'react-apexcharts'
import axios from "axios";


class OfferStat extends Component {


    constructor(props) {
        super(props);
        this.state = {
            options : {
                series: [10,10,10,10],
                labels: []
            }
        }
    }
    componentWillMount() {
        axios
            .get(`http://localhost:3001/offers`)
            .then(response => {
                const offers = response.data.data.slice(0, 4);
                const NewLabels = []
                const NewSeries = []
                offers.map(post => {
                    NewLabels.push(post.Title)
                    // axios.get(`http://localhost:3001/offers/CountUserByOffer/${post._id}`).then(response1 => {
                    // })
                });
                this.setState({
                    options : {
                        series: [10,10,10,10],
                        labels: NewLabels
                    },
                });
            });


    }
    render() {

        return (

            <React.Fragment>
                <div className="col-md-6">
                    <div className="card card-chart">
                        <div className="card-header card-header-icon card-header-danger">
                            <div className="card-icon">
                                <i className="material-icons">insert_chart</i>
                            </div>
                            <h4 className="card-title">Statics of users</h4>
                        </div>
                        <div className="card-body">
                            <Chart options={this.state.options} series={this.state.options.series} type="donut" width={350} height={320} />
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default OfferStat;