import React, {Component} from "react";
import Chart from 'react-apexcharts'


class ClaimStat extends Component {


    render() {

        return (

            <React.Fragment>
                <Chart options={this.state.options} series={this.state.options.series} type="donut" width={500} height={320} />

            </React.Fragment>
        );
    }
}

export default ClaimStat;