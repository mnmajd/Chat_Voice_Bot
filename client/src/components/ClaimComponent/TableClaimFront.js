import React, {Component} from "react";

class TableClaimFront extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats ">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">done_outline</i>
                            </div>
                            <p className="card-category">Title claim</p>
                            <h3 className="card-title">Content claim</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">date_range</i> 20/12/2009
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">build</i>
                            </div>
                            <p className="card-category">Title claim</p>
                            <h3 className="card-title">Content claim</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                <i className="material-icons">date_range</i> 20/12/2009
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TableClaimFront;