import React, {Component} from "react";
import {getServiceById} from "../../store/actions/ServiceAction";
import connect from "react-redux/es/connect/connect";


class DetailsService extends Component {
    componentWillMount() {
        const {idService} = this.props.match.params;
        const {dispatch } = this.props;
        dispatch(getServiceById(idService));
    }
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <React.Fragment>
                        <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                            <div className="card card-profile">
                                <div className="card-avatar">
                                    <a href="">
                                        <img className="img" src={require('../../assets/img/service.png')}/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-category "> Title  :{this.props.Service.Title}</h4>
                                    <h6 className="card-title text-gray">Type: {this.props.Service.Type}</h6>
                                    <h6 className="card-title text-gray">Code: {this.props.Service.Code}</h6>
                                    <p className="card-description">
                                        Description: {this.props.Service.Description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                </React.Fragment>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) =>{
    const { Service } = state.servicesreducer;
    return {
        Service
    };
}
export default connect(
    mapStateToProps,
    null
)(DetailsService);
