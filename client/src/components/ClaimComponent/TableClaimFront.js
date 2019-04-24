import React, {Component} from "react";
import {getAllClaims} from "../../store/actions/ClaimActions";
import connect from "react-redux/es/connect/connect";

class TableClaimFront extends Component {
    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(getAllClaims())
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.props.Claims.map(claim => (
                        claim.State === 'Treated' ? (
                                <React.Fragment>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats ">
                                            <div className="card-header card-header-success card-header-icon">
                                                <div className="card-icon">
                                                    <i className="material-icons">done_outline</i>
                                                </div>
                                                <h5 className="card-title">{claim.Title}</h5>
                                                <p className="card-category">{claim.State}</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">date_range</i> {claim.Date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>)
                            :claim.State === 'In Progress' ?
                            (<React.Fragment>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-warning card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">build</i>
                                        </div>
                                        <h5 className="card-title">{claim.Title}</h5>
                                        <p className="card-category">{claim.State}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">date_range</i> 20/12/2009
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>):
                            <React.Fragment>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header card-header-danger card-header-icon">
                                            <div className="card-icon">
                                                <i className="material-icons">warning</i>
                                            </div>
                                            <h5 className="card-title">{claim.Title}</h5>
                                            <p className="card-category">{claim.State}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">date_range</i> {claim.Date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>

                    ))}


                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const {Claims} = state.claimreducer;
    return {
        Claims
    };
}
export default connect(
    mapStateToProps,
    null
)(TableClaimFront);

