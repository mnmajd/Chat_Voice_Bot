import React, {Component} from "react";
import { AddNewAfterSale } from '../store/actions/AfterSalesAction';

class AddAfterSales extends Component {
    constructor(props){
        super(props);
        this.state = {
            Title: '',
            Type: '',
            Content : ''

        }
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    AddAfterSale = event =>{
        const { Title, Content } = this.state;
        const { dispatch } = this.props;
        if (Title && Content) {
            dispatch(AddNewAfterSale(Title, Content))
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="card ">
                                    <div className="card-header card-header-rose card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons">mail_outline</i>
                                        </div>
                                        <h4 className="card-title">Stacked Form</h4>
                                    </div>
                                    <div className="card-body ">
                                        <form method="#" action="#">
                                            <div className="form-group">
                                                <label htmlFor="exampleEmail" className="bmd-label-floating">Title</label>
                                                <input type="text" className="form-control"
                                                       value={this.state.Title}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="examplePass" className="bmd-label-floating">Content</label>
                                                <input type="text" className="form-control"
                                                       value={this.state.Content}
                                                />
                                            </div>

                                        </form>
                                    </div>
                                    <div className="card-footer ">
                                        <button type="button" className="btn btn-fill btn-rose" onClick={event => this.AddAfterSale()}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddAfterSales;