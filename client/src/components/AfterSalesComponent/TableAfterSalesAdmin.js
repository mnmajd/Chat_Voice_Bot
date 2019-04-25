import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import { getAllAfterSales } from '../../store/actions/AfterSalesAction';
import AddAfterSales from "./AddAfterSales";

class TableAfterSalesAdmin extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getAllAfterSales())
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
                                            <h4 className="card-title">After Sales</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Content</th>
                                                        <th>Type</th>
                                                        <th className="text-right">Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {this.props.AfterSales.map(item => (
                                                        <React.Fragment>
                                                        <tr>
                                                            <td>{item.Title}</td>
                                                            <td>{item.Content}</td>
                                                            <td>{item.Type}</td>
                                                            <td className="td-actions text-right">
                                                                <button type="button" rel="tooltip" className="btn btn-info">
                                                                    <i className="material-icons">info</i>
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
    const { AfterSales } = state.aftersalesreducer;
    return {
        AfterSales
    };
}
export default connect(
    mapStateToProps,
    null
)(TableAfterSalesAdmin);