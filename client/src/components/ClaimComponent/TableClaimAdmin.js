import React, {Component} from "react";
import {Link} from "react-router-dom";


class TableClaimAdmin extends Component {


    render() {
        return (
            <React.Fragment>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header card-header-rose card-header-icon">
                                            <div className="card-icon">
                                                <i className="material-icons">assignment</i>
                                            </div>
                                            <h4 className="card-title">Claims</h4>
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
                                                            <tr>
                                                                <td>aaaa</td>
                                                                <td>bbbb</td>
                                                                <td>cccc</td>
                                                                <td className="td-actions text-right">
                                                                    <button type="button" rel="tooltip" className="btn btn-info">
                                                                        <Link to='/admin/claims/details' style={{ color: '#FFF' }} >
                                                                            <i className="material-icons">person</i>
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


export default TableClaimAdmin;