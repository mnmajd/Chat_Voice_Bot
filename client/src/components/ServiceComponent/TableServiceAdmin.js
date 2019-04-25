import React, {Component} from "react";
import {Link} from "react-router-dom";
import {getAllServices} from "../../store/actions/ServiceAction";
import connect from "react-redux/es/connect/connect";
import {servicesreducer} from "../../store/reducers/service.reducer";


class TableServiceAdmin extends Component {
    componentWillMount() {
        const {dispatch } = this.props;
        dispatch(getAllServices())
    }
    render() {
        return (
            <React.Fragment>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-rose card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">assignment</i>
                                </div>
                                <h4 className="card-title">Services Table</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Code</th>
                                            <th className="text-right">Description</th>
                                            <th className="text-right">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.Services.map(service => (
                                            <React.Fragment>
                                                <tr>
                                                    <td>{service.Title}</td>
                                                    <td>{service.Type}</td>
                                                    <td>{service.Code}</td>
                                                    <td className="text-right">{service.Description}</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" className="btn btn-info">
                                                            <Link to={'/admin/services/details/'+service._id+'/'+service.Offer} style={{color:'white'}} >
                                                                <i className="material-icons">info</i>
                                                            </Link>
                                                        </button>
                                                        <button type="button" rel="tooltip" className="btn btn-success">
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button type="button" rel="tooltip" className="btn btn-danger">
                                                            <i className="material-icons">close</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    const { Services } = state.servicesreducer;
    return {
        Services
    };
}
export default connect(
    mapStateToProps,
    null
)(TableServiceAdmin);